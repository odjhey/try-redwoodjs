import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ImagesOnCoreAttachmentForm from 'src/components/Admin/ImagesOnCoreAttachment/ImagesOnCoreAttachmentForm'

const CREATE_IMAGES_ON_CORE_ATTACHMENT_MUTATION = gql`
  mutation CreateImagesOnCoreAttachmentMutation(
    $input: CreateImagesOnCoreAttachmentInput!
  ) {
    createImagesOnCoreAttachment(input: $input) {
      id
    }
  }
`

const NewImagesOnCoreAttachment = () => {
  const [createImagesOnCoreAttachment, { loading, error }] = useMutation(
    CREATE_IMAGES_ON_CORE_ATTACHMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ImagesOnCoreAttachment created')
        navigate(routes.adminImagesOnCoreAttachments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      attachmentId: parseInt(input.attachmentId),
      imageId: parseInt(input.imageId),
    })
    createImagesOnCoreAttachment({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New ImagesOnCoreAttachment
        </h2>
      </header>
      <div className="rw-segment-main">
        <ImagesOnCoreAttachmentForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewImagesOnCoreAttachment
