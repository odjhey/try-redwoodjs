import type { FindCoreAttachmentById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CoreAttachment from 'src/components/Admin/CoreAttachment/CoreAttachment'

export const QUERY = gql`
  query FindCoreAttachmentById($id: Int!) {
    coreAttachment: coreAttachment(id: $id) {
      id
      updatedAt
      targetModel
      unitId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CoreAttachment not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreAttachment,
}: CellSuccessProps<FindCoreAttachmentById>) => {
  return <CoreAttachment coreAttachment={coreAttachment} />
}
