import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PRICE_MUTATION = gql`
  mutation DeletePriceMutation($id: Int!) {
    deletePrice(id: $id) {
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

const Price = ({ price }) => {
  const [deletePrice] = useMutation(DELETE_PRICE_MUTATION, {
    onCompleted: () => {
      toast.success('Price deleted')
      navigate(routes.adminPrices())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete price ' + id + '?')) {
      deletePrice({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Price {price.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{price.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{price.name}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>{price.amount}</td>
            </tr>
            <tr>
              <th>Currency</th>
              <td>{price.currency}</td>
            </tr>
            <tr>
              <th>Unit id</th>
              <td>{price.unitId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditPrice({ id: price.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(price.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Price
