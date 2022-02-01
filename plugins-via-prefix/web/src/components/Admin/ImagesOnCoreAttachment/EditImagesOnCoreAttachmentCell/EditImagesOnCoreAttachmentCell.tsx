import type { EditImagesOnCoreAttachmentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ImagesOnCoreAttachmentForm from 'src/components/Admin/ImagesOnCoreAttachment/ImagesOnCoreAttachmentForm'

export const QUERY = gql`
  query EditImagesOnCoreAttachmentById($id: Int!) {
    imagesOnCoreAttachment: imagesOnCoreAttachment(id: $id) {
      id
      attachmentId
      imageId
    }
  }
`
const UPDATE_IMAGES_ON_CORE_ATTACHMENT_MUTATION = gql`
  mutation UpdateImagesOnCoreAttachmentMutation(
    $id: Int!
    $input: UpdateImagesOnCoreAttachmentInput!
  ) {
    updateImagesOnCoreAttachment(id: $id, input: $input) {
      id
      attachmentId
      imageId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  imagesOnCoreAttachment,
}: CellSuccessProps<EditImagesOnCoreAttachmentById>) => {
  const [updateImagesOnCoreAttachment, { loading, error }] = useMutation(
    UPDATE_IMAGES_ON_CORE_ATTACHMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ImagesOnCoreAttachment updated')
        navigate(routes.adminImagesOnCoreAttachments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      attachmentId: parseInt(input.attachmentId),
      imageId: parseInt(input.imageId),
    })
    updateImagesOnCoreAttachment({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ImagesOnCoreAttachment {imagesOnCoreAttachment.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ImagesOnCoreAttachmentForm
          imagesOnCoreAttachment={imagesOnCoreAttachment}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
