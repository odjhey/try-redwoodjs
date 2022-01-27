import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/Image/ImagesCell'

const DELETE_IMAGE_MUTATION = gql`
  mutation DeleteImageMutation($id: Int!) {
    deleteImage(id: $id) {
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const thumbnail = (url) => {
  const parts = url.split('/')
  parts.splice(3, 0, 'resize=width:100')
  return parts.join('/')
}

const ImagesList = ({ images }) => {
  const [deleteImage] = useMutation(DELETE_IMAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Image deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete image ' + id + '?')) {
      deleteImage({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Url</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {images.map((image) => (
            <tr key={image.id}>
              <td>{truncate(image.id)}</td>
              <td>{truncate(image.title)}</td>
              <td>
                <a href={image.url} target="_blank" rel="noreferrer">
                  <img
                    src={thumbnail(image.url)}
                    alt="attachment"
                    style={{ maxWidth: '50px' }}
                  />
                </a>
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminImage({ id: image.id })}
                    title={'Show image ' + image.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditImage({ id: image.id })}
                    title={'Edit image ' + image.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete image ' + image.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(image.id)}
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

export default ImagesList
