import EditCoreDevelopmentCell from 'src/components/Admin/CoreDevelopment/EditCoreDevelopmentCell'

type CoreDevelopmentPageProps = {
  id: number
}

const EditCoreDevelopmentPage = ({ id }: CoreDevelopmentPageProps) => {
  return <EditCoreDevelopmentCell id={id} />
}

export default EditCoreDevelopmentPage
