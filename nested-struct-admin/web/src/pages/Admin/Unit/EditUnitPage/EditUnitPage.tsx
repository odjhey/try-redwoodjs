import EditUnitCell from 'src/components/Admin/Unit/EditUnitCell'

type UnitPageProps = {
  id: number
}

const EditUnitPage = ({ id }: UnitPageProps) => {
  return <EditUnitCell id={id} />
}

export default EditUnitPage
