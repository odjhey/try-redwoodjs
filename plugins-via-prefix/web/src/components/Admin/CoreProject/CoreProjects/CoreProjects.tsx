import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/CoreProject/CoreProjectsCell'

const DELETE_CORE_PROJECT_MUTATION = gql`
  mutation DeleteCoreProjectMutation($id: Int!) {
    deleteCoreProject(id: $id) {
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

const CoreProjectsList = ({ coreProjects }) => {
  const [deleteCoreProject] = useMutation(DELETE_CORE_PROJECT_MUTATION, {
    onCompleted: () => {
      toast.success('CoreProject deleted')
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
    if (confirm('Are you sure you want to delete coreProject ' + id + '?')) {
      deleteCoreProject({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Cuid</th>
            <th>Name</th>
            <th>Updated at</th>
            <th>Development id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {coreProjects.map((coreProject) => (
            <tr key={coreProject.id}>
              <td>{truncate(coreProject.id)}</td>
              <td>{truncate(coreProject.cuid)}</td>
              <td>{truncate(coreProject.name)}</td>
              <td>{timeTag(coreProject.updatedAt)}</td>
              <td>{truncate(coreProject.developmentId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminCoreProject({ id: coreProject.id })}
                    title={'Show coreProject ' + coreProject.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditCoreProject({ id: coreProject.id })}
                    title={'Edit coreProject ' + coreProject.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete coreProject ' + coreProject.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(coreProject.id)}
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

export default CoreProjectsList
