import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/CoreUnit/CoreUnitsCell'

const DELETE_CORE_UNIT_MUTATION = gql`
  mutation DeleteCoreUnitMutation($id: Int!) {
    deleteCoreUnit(id: $id) {
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

const CoreUnitsList = ({ coreUnits }) => {
  const [deleteCoreUnit] = useMutation(DELETE_CORE_UNIT_MUTATION, {
    onCompleted: () => {
      toast.success('CoreUnit deleted')
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
    if (confirm('Are you sure you want to delete coreUnit ' + id + '?')) {
      deleteCoreUnit({ variables: { id } })
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
            <th>Project id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {coreUnits.map((coreUnit) => (
            <tr key={coreUnit.id}>
              <td>{truncate(coreUnit.id)}</td>
              <td>{truncate(coreUnit.cuid)}</td>
              <td>{truncate(coreUnit.name)}</td>
              <td>{timeTag(coreUnit.updatedAt)}</td>
              <td>{truncate(coreUnit.projectId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminCoreUnit({ id: coreUnit.id })}
                    title={'Show coreUnit ' + coreUnit.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditCoreUnit({ id: coreUnit.id })}
                    title={'Edit coreUnit ' + coreUnit.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete coreUnit ' + coreUnit.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(coreUnit.id)}
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

export default CoreUnitsList
