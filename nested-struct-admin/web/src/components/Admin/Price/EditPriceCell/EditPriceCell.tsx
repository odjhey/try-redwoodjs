import type { EditPriceById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import PriceForm from 'src/components/Admin/Price/PriceForm'

export const QUERY = gql`
  query EditPriceById($id: Int!) {
    price: price(id: $id) {
      id
      name
      amount
      currency
      unitId
    }
  }
`
const UPDATE_PRICE_MUTATION = gql`
  mutation UpdatePriceMutation($id: Int!, $input: UpdatePriceInput!) {
    updatePrice(id: $id, input: $input) {
      id
      name
      amount
      currency
      unitId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ price }: CellSuccessProps<EditPriceById>) => {
  const [updatePrice, { loading, error }] = useMutation(UPDATE_PRICE_MUTATION, {
    onCompleted: () => {
      toast.success('Price updated')
      navigate(routes.adminPrices())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { unitId: parseInt(input.unitId), })
    updatePrice({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Price {price.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PriceForm price={price} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
