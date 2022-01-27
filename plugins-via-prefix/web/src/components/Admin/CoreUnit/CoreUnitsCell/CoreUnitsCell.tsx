import type { FindCoreUnits } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import CoreUnits from 'src/components/Admin/CoreUnit/CoreUnits'

export const QUERY = gql`
  query FindCoreUnits {
    coreUnits {
      id
      cuid
      name
      updatedAt
      projectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No coreUnits yet. '}
      <Link to={routes.adminNewCoreUnit()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ coreUnits }: CellSuccessProps<FindCoreUnits>) => {
  return <CoreUnits coreUnits={coreUnits} />
}
