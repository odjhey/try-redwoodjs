import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/ImagesOnCoreAttachment/ImagesOnCoreAttachmentsCell'

const DELETE_IMAGES_ON_CORE_ATTACHMENT_MUTATION = gql`
  mutation DeleteImagesOnCoreAttachmentMutation($id: Int!) {
    deleteImagesOnCoreAttachment(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const ImagesOnCoreAttachmentsList = ({ imagesOnCoreAttachments }) => {
  const [deleteImagesOnCoreAttachment] = useMutation(
    DELETE_IMAGES_ON_CORE_ATTACHMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ImagesOnCoreAttachment deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Attachment id</th>
            <th>Image id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {imagesOnCoreAttachments.map((imagesOnCoreAttachment) => (
            <tr key={imagesOnCoreAttachment.id}>
              <td>{truncate(imagesOnCoreAttachment.id)}</td>
              <td>{truncate(imagesOnCoreAttachment.attachmentId)}</td>
              <td>{truncate(imagesOnCoreAttachment.imageId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminImagesOnCoreAttachment({
                      id: imagesOnCoreAttachment.id,
                    })}
                    title={
                      'Show imagesOnCoreAttachment ' +
                      imagesOnCoreAttachment.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditImagesOnCoreAttachment({
                      id: imagesOnCoreAttachment.id,
                    })}
                    title={
                      'Edit imagesOnCoreAttachment ' + imagesOnCoreAttachment.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete imagesOnCoreAttachment ' +
                      imagesOnCoreAttachment.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(imagesOnCoreAttachment.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ImagesOnCoreAttachmentsList
