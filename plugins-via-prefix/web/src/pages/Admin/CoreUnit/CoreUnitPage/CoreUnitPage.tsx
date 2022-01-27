import CoreUnitCell from 'src/components/Admin/CoreUnit/CoreUnitCell'
import CoreUnitExtGeneralInfoCell from 'src/components/Admin/CoreUnitExtGeneralInfo/CoreUnitExtGeneralInfoCell'

type CoreUnitPageProps = {
  id: number
}

const CoreUnitPage = ({ id }: CoreUnitPageProps) => {
  return (
    <>
      <CoreUnitCell id={id} />
      <CoreUnitExtGeneralInfoCell unitId={id} />
    </>
  )
}

export default CoreUnitPage
