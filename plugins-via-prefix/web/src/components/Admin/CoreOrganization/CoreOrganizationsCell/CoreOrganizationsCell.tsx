import type { FindCoreOrganizations } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import CoreOrganizations from 'src/components/Admin/CoreOrganization/CoreOrganizations'

export const QUERY = gql`
  query FindCoreOrganizations {
    coreOrganizations {
      id
      cuid
      name
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No coreOrganizations yet. '}
      <Link to={routes.adminNewCoreOrganization()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreOrganizations,
}: CellSuccessProps<FindCoreOrganizations>) => {
  return <CoreOrganizations coreOrganizations={coreOrganizations} />
}
