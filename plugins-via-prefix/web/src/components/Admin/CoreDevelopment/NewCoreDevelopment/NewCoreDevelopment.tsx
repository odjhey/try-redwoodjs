import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CoreDevelopmentForm from 'src/components/Admin/CoreDevelopment/CoreDevelopmentForm'

const CREATE_CORE_DEVELOPMENT_MUTATION = gql`
  mutation CreateCoreDevelopmentMutation($input: CreateCoreDevelopmentInput!) {
    createCoreDevelopment(input: $input) {
      id
    }
  }
`

const NewCoreDevelopment = () => {
  const [createCoreDevelopment, { loading, error }] = useMutation(
    CREATE_CORE_DEVELOPMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreDevelopment created')
        navigate(routes.adminCoreDevelopments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      organizationId: parseInt(input.organizationId),
    })
    createCoreDevelopment({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CoreDevelopment</h2>
      </header>
      <div className="rw-segment-main">
        <CoreDevelopmentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCoreDevelopment
