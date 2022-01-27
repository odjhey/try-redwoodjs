import type { EditCoreUnitById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CoreUnitForm from 'src/components/Admin/CoreUnit/CoreUnitForm'

export const QUERY = gql`
  query EditCoreUnitById($id: Int!) {
    coreUnit: coreUnit(id: $id) {
      id
      cuid
      name
      updatedAt
      projectId
    }
  }
`
const UPDATE_CORE_UNIT_MUTATION = gql`
  mutation UpdateCoreUnitMutation($id: Int!, $input: UpdateCoreUnitInput!) {
    updateCoreUnit(id: $id, input: $input) {
      id
      cuid
      name
      updatedAt
      projectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ coreUnit }: CellSuccessProps<EditCoreUnitById>) => {
  const [updateCoreUnit, { loading, error }] = useMutation(
    UPDATE_CORE_UNIT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreUnit updated')
        navigate(routes.adminCoreUnits())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      projectId: parseInt(input.projectId),
    })
    updateCoreUnit({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CoreUnit {coreUnit.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CoreUnitForm
          coreUnit={coreUnit}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
