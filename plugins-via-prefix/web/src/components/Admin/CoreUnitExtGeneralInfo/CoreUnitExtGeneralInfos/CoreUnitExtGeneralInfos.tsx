import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/CoreUnitExtGeneralInfo/CoreUnitExtGeneralInfosCell'

const DELETE_CORE_UNIT_EXT_GENERAL_INFO_MUTATION = gql`
  mutation DeleteCoreUnitExtGeneralInfoMutation($id: Int!) {
    deleteCoreUnitExtGeneralInfo(id: $id) {
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

const CoreUnitExtGeneralInfosList = ({ coreUnitExtGeneralInfos }) => {
  const [deleteCoreUnitExtGeneralInfo] = useMutation(
    DELETE_CORE_UNIT_EXT_GENERAL_INFO_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreUnitExtGeneralInfo deleted')
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
        'Are you sure you want to delete coreUnitExtGeneralInfo ' + id + '?'
      )
    ) {
      deleteCoreUnitExtGeneralInfo({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Updated at</th>
            <th>Unit id</th>
            <th>Model</th>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {coreUnitExtGeneralInfos.map((coreUnitExtGeneralInfo) => (
            <tr key={coreUnitExtGeneralInfo.id}>
              <td>{truncate(coreUnitExtGeneralInfo.id)}</td>
              <td>{timeTag(coreUnitExtGeneralInfo.updatedAt)}</td>
              <td>{truncate(coreUnitExtGeneralInfo.unitId)}</td>
              <td>{truncate(coreUnitExtGeneralInfo.model)}</td>
              <td>{truncate(coreUnitExtGeneralInfo.description)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminCoreUnitExtGeneralInfo({
                      id: coreUnitExtGeneralInfo.id,
                    })}
                    title={
                      'Show coreUnitExtGeneralInfo ' +
                      coreUnitExtGeneralInfo.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditCoreUnitExtGeneralInfo({
                      id: coreUnitExtGeneralInfo.id,
                    })}
                    title={
                      'Edit coreUnitExtGeneralInfo ' + coreUnitExtGeneralInfo.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete coreUnitExtGeneralInfo ' +
                      coreUnitExtGeneralInfo.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(coreUnitExtGeneralInfo.id)}
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

export default CoreUnitExtGeneralInfosList
