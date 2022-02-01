import CoreAttachmentCell from 'src/components/Admin/CoreAttachment/CoreAttachmentCell'

type CoreAttachmentPageProps = {
  id: number
}

const CoreAttachmentPage = ({ id }: CoreAttachmentPageProps) => {
  return <CoreAttachmentCell id={id} />
}

export default CoreAttachmentPage
