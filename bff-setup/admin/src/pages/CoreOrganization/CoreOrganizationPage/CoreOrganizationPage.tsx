import CoreOrganizationCell from 'src/components/CoreOrganization/CoreOrganizationCell'

type CoreOrganizationPageProps = {
  id: number
}

const CoreOrganizationPage = ({ id }: CoreOrganizationPageProps) => {
  return <CoreOrganizationCell id={id} />
}

export default CoreOrganizationPage
