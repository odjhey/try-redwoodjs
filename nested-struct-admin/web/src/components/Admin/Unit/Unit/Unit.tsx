import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import PricesList from '../../Price/Prices/Prices'

const DELETE_UNIT_MUTATION = gql`
  mutation DeleteUnitMutation($id: Int!) {
    deleteUnit(id: $id) {
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

const Unit = ({ unit }) => {
  const [deleteUnit] = useMutation(DELETE_UNIT_MUTATION, {
    onCompleted: () => {
      toast.success('Unit deleted')
      navigate(routes.adminUnits())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete unit ' + id + '?')) {
      deleteUnit({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Unit {unit.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{unit.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{unit.name}</td>
            </tr>
            <tr>
              <th>Desc</th>
              <td>{unit.desc}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <div className="rw-segment-header">
            <h3 className="rw-heading rw-heading-secondary">Prices</h3>
          </div>
          <div className="rw-segment-main">
            <PricesList prices={unit.prices}></PricesList>
          </div>
        </div>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditUnit({ id: unit.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <Link
          to={routes.adminNewPrice({ unitId: unit.id })}
          className="rw-button rw-button-blue"
        >
          Add Price
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(unit.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Unit
