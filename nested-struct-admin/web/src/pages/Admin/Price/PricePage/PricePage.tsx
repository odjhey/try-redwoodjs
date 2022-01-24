import PriceCell from 'src/components/Admin/Price/PriceCell'

type PricePageProps = {
  id: number
}

const PricePage = ({ id }: PricePageProps) => {
  return <PriceCell id={id} />
}

export default PricePage
