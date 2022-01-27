import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CORE_UNIT_EXT_GENERAL_INFO_MUTATION = gql`
  mutation DeleteCoreUnitExtGeneralInfoMutation($id: Int!) {
    deleteCoreUnitExtGeneralInfo(id: $id) {
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

const CoreUnitExtGeneralInfo = ({ coreUnitExtGeneralInfo }) => {
  const [deleteCoreUnitExtGeneralInfo] = useMutation(
    DELETE_CORE_UNIT_EXT_GENERAL_INFO_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreUnitExtGeneralInfo deleted')
        navigate(routes.adminCoreUnitExtGeneralInfos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CoreUnitExtGeneralInfo {coreUnitExtGeneralInfo.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{coreUnitExtGeneralInfo.id}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(coreUnitExtGeneralInfo.updatedAt)}</td>
            </tr>
            <tr>
              <th>Unit id</th>
              <td>{coreUnitExtGeneralInfo.unitId}</td>
            </tr>
            <tr>
              <th>Model</th>
              <td>{coreUnitExtGeneralInfo.model}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{coreUnitExtGeneralInfo.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditCoreUnitExtGeneralInfo({
            id: coreUnitExtGeneralInfo.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(coreUnitExtGeneralInfo.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CoreUnitExtGeneralInfo
