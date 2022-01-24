import UnitCell from 'src/components/Admin/Unit/UnitCell'

type UnitPageProps = {
  id: number
}

const UnitPage = ({ id }: UnitPageProps) => {
  return <UnitCell id={id} />
}

export default UnitPage
