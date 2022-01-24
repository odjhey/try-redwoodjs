import type { EditUnitById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import UnitForm from 'src/components/Admin/Unit/UnitForm'

export const QUERY = gql`
  query EditUnitById($id: Int!) {
    unit: unit(id: $id) {
      id
      name
      desc
    }
  }
`
const UPDATE_UNIT_MUTATION = gql`
  mutation UpdateUnitMutation($id: Int!, $input: UpdateUnitInput!) {
    updateUnit(id: $id, input: $input) {
      id
      name
      desc
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ unit }: CellSuccessProps<EditUnitById>) => {
  const [updateUnit, { loading, error }] = useMutation(UPDATE_UNIT_MUTATION, {
    onCompleted: () => {
      toast.success('Unit updated')
      navigate(routes.adminUnits())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateUnit({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Unit {unit.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UnitForm unit={unit} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
