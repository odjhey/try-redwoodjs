import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CORE_ATTACHMENT_MUTATION = gql`
  mutation DeleteCoreAttachmentMutation($id: Int!) {
    deleteCoreAttachment(id: $id) {
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

const CoreAttachment = ({ coreAttachment }) => {
  const [deleteCoreAttachment] = useMutation(DELETE_CORE_ATTACHMENT_MUTATION, {
    onCompleted: () => {
      toast.success('CoreAttachment deleted')
      navigate(routes.adminCoreAttachments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete coreAttachment ' + id + '?')) {
      deleteCoreAttachment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CoreAttachment {coreAttachment.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{coreAttachment.id}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(coreAttachment.updatedAt)}</td>
            </tr>
            <tr>
              <th>Target model</th>
              <td>{coreAttachment.targetModel}</td>
            </tr>
            <tr>
              <th>Unit id</th>
              <td>{coreAttachment.unitId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditCoreAttachment({ id: coreAttachment.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(coreAttachment.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CoreAttachment
