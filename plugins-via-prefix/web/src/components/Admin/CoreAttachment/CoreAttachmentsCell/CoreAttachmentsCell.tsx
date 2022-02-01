import type { FindCoreAttachments } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import CoreAttachments from 'src/components/Admin/CoreAttachment/CoreAttachments'

export const QUERY = gql`
  query FindCoreAttachments {
    coreAttachments {
      id
      updatedAt
      targetModel
      unitId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No coreAttachments yet. '}
      <Link to={routes.adminNewCoreAttachment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreAttachments,
}: CellSuccessProps<FindCoreAttachments>) => {
  return <CoreAttachments coreAttachments={coreAttachments} />
}
