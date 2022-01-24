import NewPrice from 'src/components/Admin/Price/NewPrice'

const NewPricePage = (props) => {
  const { unitId } = props
  return <NewPrice price={{ unitId }} />
}

export default NewPricePage
