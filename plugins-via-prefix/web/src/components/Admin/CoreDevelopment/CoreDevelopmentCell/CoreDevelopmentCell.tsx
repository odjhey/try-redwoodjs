import type { FindCoreDevelopmentById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CoreDevelopment from 'src/components/Admin/CoreDevelopment/CoreDevelopment'

export const QUERY = gql`
  query FindCoreDevelopmentById($id: Int!) {
    coreDevelopment: coreDevelopment(id: $id) {
      id
      cuid
      name
      updatedAt
      organizationId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CoreDevelopment not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreDevelopment,
}: CellSuccessProps<FindCoreDevelopmentById>) => {
  return <CoreDevelopment coreDevelopment={coreDevelopment} />
}
