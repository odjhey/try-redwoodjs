import type { EditCoreDevelopmentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CoreDevelopmentForm from 'src/components/Admin/CoreDevelopment/CoreDevelopmentForm'

export const QUERY = gql`
  query EditCoreDevelopmentById($id: Int!) {
    coreDevelopment: coreDevelopment(id: $id) {
      id
      cuid
      name
      updatedAt
      organizationId
    }
  }
`
const UPDATE_CORE_DEVELOPMENT_MUTATION = gql`
  mutation UpdateCoreDevelopmentMutation(
    $id: Int!
    $input: UpdateCoreDevelopmentInput!
  ) {
    updateCoreDevelopment(id: $id, input: $input) {
      id
      cuid
      name
      updatedAt
      organizationId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreDevelopment,
}: CellSuccessProps<EditCoreDevelopmentById>) => {
  const [updateCoreDevelopment, { loading, error }] = useMutation(
    UPDATE_CORE_DEVELOPMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreDevelopment updated')
        navigate(routes.adminCoreDevelopments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      organizationId: parseInt(input.organizationId),
    })
    updateCoreDevelopment({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CoreDevelopment {coreDevelopment.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CoreDevelopmentForm
          coreDevelopment={coreDevelopment}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
