import type { FindPriceById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Price from 'src/components/Admin/Price/Price'

export const QUERY = gql`
  query FindPriceById($id: Int!) {
    price: price(id: $id) {
      id
      name
      amount
      currency
      unitId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Price not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ price }: CellSuccessProps<FindPriceById>) => {
  return <Price price={price} />
}
