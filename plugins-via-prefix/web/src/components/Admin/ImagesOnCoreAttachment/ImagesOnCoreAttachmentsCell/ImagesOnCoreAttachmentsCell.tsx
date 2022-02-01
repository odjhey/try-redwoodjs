import type { FindImagesOnCoreAttachments } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import ImagesOnCoreAttachments from 'src/components/Admin/ImagesOnCoreAttachment/ImagesOnCoreAttachments'

export const QUERY = gql`
  query FindImagesOnCoreAttachments {
    imagesOnCoreAttachments {
      id
      attachmentId
      imageId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No imagesOnCoreAttachments yet. '}
      <Link to={routes.adminNewImagesOnCoreAttachment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  imagesOnCoreAttachments,
}: CellSuccessProps<FindImagesOnCoreAttachments>) => {
  return (
    <ImagesOnCoreAttachments
      imagesOnCoreAttachments={imagesOnCoreAttachments}
    />
  )
}
