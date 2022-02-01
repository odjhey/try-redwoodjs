import EditImagesOnCoreAttachmentCell from 'src/components/Admin/ImagesOnCoreAttachment/EditImagesOnCoreAttachmentCell'

type ImagesOnCoreAttachmentPageProps = {
  id: number
}

const EditImagesOnCoreAttachmentPage = ({
  id,
}: ImagesOnCoreAttachmentPageProps) => {
  return <EditImagesOnCoreAttachmentCell id={id} />
}

export default EditImagesOnCoreAttachmentPage
