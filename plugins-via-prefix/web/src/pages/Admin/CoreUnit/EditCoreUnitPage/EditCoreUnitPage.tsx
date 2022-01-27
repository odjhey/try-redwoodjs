import EditCoreUnitCell from 'src/components/Admin/CoreUnit/EditCoreUnitCell'

type CoreUnitPageProps = {
  id: number
}

const EditCoreUnitPage = ({ id }: CoreUnitPageProps) => {
  return <EditCoreUnitCell id={id} />
}

export default EditCoreUnitPage
