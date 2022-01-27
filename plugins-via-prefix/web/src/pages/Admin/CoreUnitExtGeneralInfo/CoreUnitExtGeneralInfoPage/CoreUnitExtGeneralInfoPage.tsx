import CoreUnitExtGeneralInfoCell from 'src/components/Admin/CoreUnitExtGeneralInfo/CoreUnitExtGeneralInfoCell'

type CoreUnitExtGeneralInfoPageProps = {
  id: number
}

const CoreUnitExtGeneralInfoPage = ({
  id,
}: CoreUnitExtGeneralInfoPageProps) => {
  return <CoreUnitExtGeneralInfoCell id={id} />
}

export default CoreUnitExtGeneralInfoPage
