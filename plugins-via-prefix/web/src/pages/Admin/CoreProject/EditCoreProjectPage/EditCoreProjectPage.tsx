import EditCoreProjectCell from 'src/components/Admin/CoreProject/EditCoreProjectCell'

type CoreProjectPageProps = {
  id: number
}

const EditCoreProjectPage = ({ id }: CoreProjectPageProps) => {
  return <EditCoreProjectCell id={id} />
}

export default EditCoreProjectPage
