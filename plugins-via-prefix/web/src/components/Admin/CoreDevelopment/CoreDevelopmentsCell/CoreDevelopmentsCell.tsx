import type { FindCoreDevelopments } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import CoreDevelopments from 'src/components/Admin/CoreDevelopment/CoreDevelopments'

export const QUERY = gql`
  query FindCoreDevelopments {
    coreDevelopments {
      id
      cuid
      name
      updatedAt
      organizationId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No coreDevelopments yet. '}
      <Link to={routes.adminNewCoreDevelopment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreDevelopments,
}: CellSuccessProps<FindCoreDevelopments>) => {
  return <CoreDevelopments coreDevelopments={coreDevelopments} />
}
