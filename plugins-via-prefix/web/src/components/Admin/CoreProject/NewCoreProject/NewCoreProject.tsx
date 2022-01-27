import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CoreProjectForm from 'src/components/Admin/CoreProject/CoreProjectForm'

const CREATE_CORE_PROJECT_MUTATION = gql`
  mutation CreateCoreProjectMutation($input: CreateCoreProjectInput!) {
    createCoreProject(input: $input) {
      id
    }
  }
`

const NewCoreProject = () => {
  const [createCoreProject, { loading, error }] = useMutation(
    CREATE_CORE_PROJECT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreProject created')
        navigate(routes.adminCoreProjects())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      developmentId: parseInt(input.developmentId),
    })
    createCoreProject({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CoreProject</h2>
      </header>
      <div className="rw-segment-main">
        <CoreProjectForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCoreProject
