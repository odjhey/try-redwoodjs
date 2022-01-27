import EditCoreUnitExtGeneralInfoCell from 'src/components/Admin/CoreUnitExtGeneralInfo/EditCoreUnitExtGeneralInfoCell'

type CoreUnitExtGeneralInfoPageProps = {
  id: number
}

const EditCoreUnitExtGeneralInfoPage = ({
  id,
}: CoreUnitExtGeneralInfoPageProps) => {
  return <EditCoreUnitExtGeneralInfoCell id={id} />
}

export default EditCoreUnitExtGeneralInfoPage
