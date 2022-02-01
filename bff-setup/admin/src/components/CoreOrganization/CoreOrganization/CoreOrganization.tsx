import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CORE_ORGANIZATION_MUTATION = gql`
  mutation DeleteCoreOrganizationMutation($id: Int!) {
    deleteCoreOrganization(id: $id) {
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

const CoreOrganization = ({ coreOrganization }) => {
  const [deleteCoreOrganization] = useMutation(DELETE_CORE_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('CoreOrganization deleted')
      navigate(routes.coreOrganizations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete coreOrganization ' + id + '?')) {
      deleteCoreOrganization({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">CoreOrganization {coreOrganization.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{coreOrganization.id}</td>
            </tr><tr>
              <th>Cuid</th>
              <td>{coreOrganization.cuid}</td>
            </tr><tr>
              <th>Name</th>
              <td>{coreOrganization.name}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(coreOrganization.updatedAt)}</td>
            </tr><tr>
              <th>Deleted at</th>
              <td>{timeTag(coreOrganization.deletedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCoreOrganization({ id: coreOrganization.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(coreOrganization.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CoreOrganization
