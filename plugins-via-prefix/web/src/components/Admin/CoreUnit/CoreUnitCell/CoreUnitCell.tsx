import type { FindCoreUnitById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CoreUnit from 'src/components/Admin/CoreUnit/CoreUnit'

export const QUERY = gql`
  query FindCoreUnitById($id: Int!) {
    coreUnit: coreUnit(id: $id) {
      id
      cuid
      name
      updatedAt
      projectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CoreUnit not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ coreUnit }: CellSuccessProps<FindCoreUnitById>) => {
  return <CoreUnit coreUnit={coreUnit} />
}
