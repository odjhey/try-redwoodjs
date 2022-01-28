import ImagesOnCoreAttachmentCell from 'src/components/Admin/ImagesOnCoreAttachment/ImagesOnCoreAttachmentCell'

type ImagesOnCoreAttachmentPageProps = {
  id: number
}

const ImagesOnCoreAttachmentPage = ({
  id,
}: ImagesOnCoreAttachmentPageProps) => {
  return <ImagesOnCoreAttachmentCell id={id} />
}

export default ImagesOnCoreAttachmentPage
