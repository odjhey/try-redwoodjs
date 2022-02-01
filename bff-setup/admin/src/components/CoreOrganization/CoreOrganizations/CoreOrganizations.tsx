import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/CoreOrganization/CoreOrganizationsCell'

const DELETE_CORE_ORGANIZATION_MUTATION = gql`
  mutation DeleteCoreOrganizationMutation($id: Int!) {
    deleteCoreOrganization(id: $id) {
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

const CoreOrganizationsList = ({ coreOrganizations }) => {
  const [deleteCoreOrganization] = useMutation(DELETE_CORE_ORGANIZATION_MUTATION, {
    onCompleted: () => {
      toast.success('CoreOrganization deleted')
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
    if (confirm('Are you sure you want to delete coreOrganization ' + id + '?')) {
      deleteCoreOrganization({ variables: { id } })
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
            <th>Deleted at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {coreOrganizations.map((coreOrganization) => (
            <tr key={coreOrganization.id}>
              <td>{truncate(coreOrganization.id)}</td>
              <td>{truncate(coreOrganization.cuid)}</td>
              <td>{truncate(coreOrganization.name)}</td>
              <td>{timeTag(coreOrganization.updatedAt)}</td>
              <td>{timeTag(coreOrganization.deletedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.coreOrganization({ id: coreOrganization.id })}
                    title={'Show coreOrganization ' + coreOrganization.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCoreOrganization({ id: coreOrganization.id })}
                    title={'Edit coreOrganization ' + coreOrganization.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete coreOrganization ' + coreOrganization.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(coreOrganization.id)}
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

export default CoreOrganizationsList
