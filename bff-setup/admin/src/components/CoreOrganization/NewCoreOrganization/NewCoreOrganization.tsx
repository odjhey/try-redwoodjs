import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CoreOrganizationForm from 'src/components/CoreOrganization/CoreOrganizationForm'

const CREATE_CORE_ORGANIZATION_MUTATION = gql`
  mutation CreateCoreOrganizationMutation($input: CreateCoreOrganizationInput!) {
    createCoreOrganization(input: $input) {
      id
    }
  }
`

const NewCoreOrganization = () => {
  const [createCoreOrganization, { loading, error }] = useMutation(CREATE_CORE_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('CoreOrganization created')
      navigate(routes.coreOrganizations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createCoreOrganization({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CoreOrganization</h2>
      </header>
      <div className="rw-segment-main">
        <CoreOrganizationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCoreOrganization
