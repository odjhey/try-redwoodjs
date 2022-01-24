import type { FindUnitById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Unit from 'src/components/Admin/Unit/Unit'

export const QUERY = gql`
  query FindUnitById($id: Int!) {
    unit: unit(id: $id) {
      id
      name
      desc
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Unit not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ unit }: CellSuccessProps<FindUnitById>) => {
  return <Unit unit={unit} />
}
