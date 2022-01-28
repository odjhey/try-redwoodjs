import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/CoreAttachment/CoreAttachmentsCell'

const DELETE_CORE_ATTACHMENT_MUTATION = gql`
  mutation DeleteCoreAttachmentMutation($id: Int!) {
    deleteCoreAttachment(id: $id) {
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

const CoreAttachmentsList = ({ coreAttachments }) => {
  const [deleteCoreAttachment] = useMutation(DELETE_CORE_ATTACHMENT_MUTATION, {
    onCompleted: () => {
      toast.success('CoreAttachment deleted')
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
    if (confirm('Are you sure you want to delete coreAttachment ' + id + '?')) {
      deleteCoreAttachment({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Updated at</th>
            <th>Target model</th>
            <th>Unit id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {coreAttachments.map((coreAttachment) => (
            <tr key={coreAttachment.id}>
              <td>{truncate(coreAttachment.id)}</td>
              <td>{timeTag(coreAttachment.updatedAt)}</td>
              <td>{truncate(coreAttachment.targetModel)}</td>
              <td>{truncate(coreAttachment.unitId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminCoreAttachment({ id: coreAttachment.id })}
                    title={
                      'Show coreAttachment ' + coreAttachment.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditCoreAttachment({
                      id: coreAttachment.id,
                    })}
                    title={'Edit coreAttachment ' + coreAttachment.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete coreAttachment ' + coreAttachment.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(coreAttachment.id)}
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

export default CoreAttachmentsList
