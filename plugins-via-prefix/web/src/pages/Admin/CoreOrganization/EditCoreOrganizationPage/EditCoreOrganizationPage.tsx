import EditCoreOrganizationCell from 'src/components/Admin/CoreOrganization/EditCoreOrganizationCell'

type CoreOrganizationPageProps = {
  id: number
}

const EditCoreOrganizationPage = ({ id }: CoreOrganizationPageProps) => {
  return <EditCoreOrganizationCell id={id} />
}

export default EditCoreOrganizationPage
