import type { FindCoreProjectById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CoreProject from 'src/components/Admin/CoreProject/CoreProject'

export const QUERY = gql`
  query FindCoreProjectById($id: Int!) {
    coreProject: coreProject(id: $id) {
      id
      cuid
      name
      updatedAt
      developmentId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CoreProject not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreProject,
}: CellSuccessProps<FindCoreProjectById>) => {
  return <CoreProject coreProject={coreProject} />
}
