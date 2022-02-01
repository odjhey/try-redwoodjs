import type { EditCoreOrganizationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CoreOrganizationForm from 'src/components/CoreOrganization/CoreOrganizationForm'

export const QUERY = gql`
  query EditCoreOrganizationById($id: Int!) {
    coreOrganization: coreOrganization(id: $id) {
      id
      cuid
      name
      updatedAt
      deletedAt
    }
  }
`
const UPDATE_CORE_ORGANIZATION_MUTATION = gql`
  mutation UpdateCoreOrganizationMutation($id: Int!, $input: UpdateCoreOrganizationInput!) {
    updateCoreOrganization(id: $id, input: $input) {
      id
      cuid
      name
      updatedAt
      deletedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ coreOrganization }: CellSuccessProps<EditCoreOrganizationById>) => {
  const [updateCoreOrganization, { loading, error }] = useMutation(UPDATE_CORE_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('CoreOrganization updated')
      navigate(routes.coreOrganizations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateCoreOrganization({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit CoreOrganization {coreOrganization.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CoreOrganizationForm coreOrganization={coreOrganization} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
