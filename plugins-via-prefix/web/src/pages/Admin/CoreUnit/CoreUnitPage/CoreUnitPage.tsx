import CoreUnitCell from 'src/components/Admin/CoreUnit/CoreUnitCell'

type CoreUnitPageProps = {
  id: number
}

const CoreUnitPage = ({ id }: CoreUnitPageProps) => {
  return <CoreUnitCell id={id} />
}

export default CoreUnitPage
