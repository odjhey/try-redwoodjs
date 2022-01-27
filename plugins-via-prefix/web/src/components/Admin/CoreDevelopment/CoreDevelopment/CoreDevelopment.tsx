import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CORE_DEVELOPMENT_MUTATION = gql`
  mutation DeleteCoreDevelopmentMutation($id: Int!) {
    deleteCoreDevelopment(id: $id) {
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

const CoreDevelopment = ({ coreDevelopment }) => {
  const [deleteCoreDevelopment] = useMutation(
    DELETE_CORE_DEVELOPMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreDevelopment deleted')
        navigate(routes.adminCoreDevelopments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete coreDevelopment ' + id + '?')
    ) {
      deleteCoreDevelopment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CoreDevelopment {coreDevelopment.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{coreDevelopment.id}</td>
            </tr>
            <tr>
              <th>Cuid</th>
              <td>{coreDevelopment.cuid}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{coreDevelopment.name}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(coreDevelopment.updatedAt)}</td>
            </tr>
            <tr>
              <th>Organization id</th>
              <td>{coreDevelopment.organizationId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditCoreDevelopment({ id: coreDevelopment.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(coreDevelopment.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CoreDevelopment
