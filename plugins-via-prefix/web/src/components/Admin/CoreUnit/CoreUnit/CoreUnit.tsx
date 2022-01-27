import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CORE_UNIT_MUTATION = gql`
  mutation DeleteCoreUnitMutation($id: Int!) {
    deleteCoreUnit(id: $id) {
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

const CoreUnit = ({ coreUnit }) => {
  const [deleteCoreUnit] = useMutation(DELETE_CORE_UNIT_MUTATION, {
    onCompleted: () => {
      toast.success('CoreUnit deleted')
      navigate(routes.adminCoreUnits())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete coreUnit ' + id + '?')) {
      deleteCoreUnit({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CoreUnit {coreUnit.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{coreUnit.id}</td>
            </tr>
            <tr>
              <th>Cuid</th>
              <td>{coreUnit.cuid}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{coreUnit.name}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(coreUnit.updatedAt)}</td>
            </tr>
            <tr>
              <th>Project id</th>
              <td>{coreUnit.projectId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditCoreUnit({ id: coreUnit.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(coreUnit.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CoreUnit
