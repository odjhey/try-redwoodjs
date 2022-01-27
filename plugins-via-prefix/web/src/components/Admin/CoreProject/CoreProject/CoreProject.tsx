import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CORE_PROJECT_MUTATION = gql`
  mutation DeleteCoreProjectMutation($id: Int!) {
    deleteCoreProject(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const CoreProject = ({ coreProject }) => {
  const [deleteCoreProject] = useMutation(DELETE_CORE_PROJECT_MUTATION, {
    onCompleted: () => {
      toast.success('CoreProject deleted')
      navigate(routes.adminCoreProjects())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete coreProject ' + id + '?')) {
      deleteCoreProject({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CoreProject {coreProject.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{coreProject.id}</td>
            </tr>
            <tr>
              <th>Cuid</th>
              <td>{coreProject.cuid}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{coreProject.name}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(coreProject.updatedAt)}</td>
            </tr>
            <tr>
              <th>Development id</th>
              <td>{coreProject.developmentId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditCoreProject({ id: coreProject.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(coreProject.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CoreProject
