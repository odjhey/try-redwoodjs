import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PriceForm from 'src/components/Admin/Price/PriceForm'

const CREATE_PRICE_MUTATION = gql`
  mutation CreatePriceMutation($input: CreatePriceInput!) {
    createPrice(input: $input) {
      id
    }
  }
`

const NewPrice = () => {
  const [createPrice, { loading, error }] = useMutation(CREATE_PRICE_MUTATION, {
    onCompleted: () => {
      toast.success('Price created')
      navigate(routes.adminPrices())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { unitId: parseInt(input.unitId) })
    createPrice({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Price</h2>
      </header>
      <div className="rw-segment-main">
        <PriceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPrice
