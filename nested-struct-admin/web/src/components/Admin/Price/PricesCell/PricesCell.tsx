import type { FindPrices } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Prices from 'src/components/Admin/Price/Prices'

export const QUERY = gql`
  query FindPrices {
    prices {
      id
      name
      amount
      currency
      unitId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No prices yet. '}
      <Link to={routes.adminNewPrice()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ prices }: CellSuccessProps<FindPrices>) => {
  return <Prices prices={prices} />
}
