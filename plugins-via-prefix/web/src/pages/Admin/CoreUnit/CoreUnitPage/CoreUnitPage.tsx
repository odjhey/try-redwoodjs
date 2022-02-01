import { Divider } from '@mantine/core'
import CoreUnitCell from 'src/components/Admin/CoreUnit/CoreUnitCell'
import CoreUnitExtGeneralInfoCell from 'src/components/Admin/CoreUnitExtGeneralInfo/CoreUnitExtGeneralInfoCell'
import ImagesOnCoreAttachmentsByUnitIdCell from 'src/components/Admin/ImagesOnCoreAttachment/ImagesOnCoreAttachmentsByUnitIdCell'

type CoreUnitPageProps = {
  id: number
}

const CoreUnitPage = ({ id }: CoreUnitPageProps) => {
  return (
    <>
      <CoreUnitCell id={id} />
      <Divider my="lg" label="Views" labelPosition="center" />
      <CoreUnitExtGeneralInfoCell unitId={id} />
      <ImagesOnCoreAttachmentsByUnitIdCell unitId={id} />
    </>
  )
}

export default CoreUnitPage
