import EditPriceCell from 'src/components/Admin/Price/EditPriceCell'

type PricePageProps = {
  id: number
}

const EditPricePage = ({ id }: PricePageProps) => {
  return <EditPriceCell id={id} />
}

export default EditPricePage
