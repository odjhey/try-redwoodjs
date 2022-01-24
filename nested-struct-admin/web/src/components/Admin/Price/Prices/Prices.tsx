import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/Price/PricesCell'

const DELETE_PRICE_MUTATION = gql`
  mutation DeletePriceMutation($id: Int!) {
    deletePrice(id: $id) {
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

const PricesList = ({ prices }) => {
  const [deletePrice] = useMutation(DELETE_PRICE_MUTATION, {
    onCompleted: () => {
      toast.success('Price deleted')
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
    if (confirm('Are you sure you want to delete price ' + id + '?')) {
      deletePrice({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Unit id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price) => (
            <tr key={price.id}>
              <td>{truncate(price.id)}</td>
              <td>{truncate(price.name)}</td>
              <td>{truncate(price.amount)}</td>
              <td>{truncate(price.currency)}</td>
              <td>{truncate(price.unitId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminPrice({ id: price.id })}
                    title={'Show price ' + price.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditPrice({ id: price.id })}
                    title={'Edit price ' + price.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete price ' + price.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(price.id)}
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

export default PricesList
