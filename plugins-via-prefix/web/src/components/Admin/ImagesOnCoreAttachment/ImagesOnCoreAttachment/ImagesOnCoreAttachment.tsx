import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_IMAGES_ON_CORE_ATTACHMENT_MUTATION = gql`
  mutation DeleteImagesOnCoreAttachmentMutation($id: Int!) {
    deleteImagesOnCoreAttachment(id: $id) {
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

const ImagesOnCoreAttachment = ({ imagesOnCoreAttachment }) => {
  const [deleteImagesOnCoreAttachment] = useMutation(
    DELETE_IMAGES_ON_CORE_ATTACHMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ImagesOnCoreAttachment deleted')
        navigate(routes.adminImagesOnCoreAttachments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm(
        'Are you sure you want to delete imagesOnCoreAttachment ' + id + '?'
      )
    ) {
      deleteImagesOnCoreAttachment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ImagesOnCoreAttachment {imagesOnCoreAttachment.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{imagesOnCoreAttachment.id}</td>
            </tr>
            <tr>
              <th>Attachment id</th>
              <td>{imagesOnCoreAttachment.attachmentId}</td>
            </tr>
            <tr>
              <th>Image id</th>
              <td>{imagesOnCoreAttachment.imageId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditImagesOnCoreAttachment({
            id: imagesOnCoreAttachment.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(imagesOnCoreAttachment.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ImagesOnCoreAttachment
