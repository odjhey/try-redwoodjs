import type { FindCoreProjects } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import CoreProjects from 'src/components/Admin/CoreProject/CoreProjects'

export const QUERY = gql`
  query FindCoreProjects {
    coreProjects {
      id
      cuid
      name
      updatedAt
      developmentId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No coreProjects yet. '}
      <Link to={routes.adminNewCoreProject()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreProjects,
}: CellSuccessProps<FindCoreProjects>) => {
  return <CoreProjects coreProjects={coreProjects} />
}
