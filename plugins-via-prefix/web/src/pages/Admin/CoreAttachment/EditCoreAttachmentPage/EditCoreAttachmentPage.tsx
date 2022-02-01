import EditCoreAttachmentCell from 'src/components/Admin/CoreAttachment/EditCoreAttachmentCell'

type CoreAttachmentPageProps = {
  id: number
}

const EditCoreAttachmentPage = ({ id }: CoreAttachmentPageProps) => {
  return <EditCoreAttachmentCell id={id} />
}

export default EditCoreAttachmentPage
