import type { FindImagesOnCoreAttachmentById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ImagesOnCoreAttachment from 'src/components/Admin/ImagesOnCoreAttachment/ImagesOnCoreAttachment'

export const QUERY = gql`
  query FindImagesOnCoreAttachmentById($id: Int!) {
    imagesOnCoreAttachment: imagesOnCoreAttachment(id: $id) {
      id
      attachmentId
      imageId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ImagesOnCoreAttachment not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  imagesOnCoreAttachment,
}: CellSuccessProps<FindImagesOnCoreAttachmentById>) => {
  return (
    <ImagesOnCoreAttachment imagesOnCoreAttachment={imagesOnCoreAttachment} />
  )
}
