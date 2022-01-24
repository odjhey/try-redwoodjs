import type { FindUnits } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Units from 'src/components/Admin/Unit/Units'

export const QUERY = gql`
  query FindUnits {
    units {
      id
      name
      desc
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No units yet. '}
      <Link
        to={routes.adminNewUnit()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ units }: CellSuccessProps<FindUnits>) => {
  return <Units units={units} />
}
