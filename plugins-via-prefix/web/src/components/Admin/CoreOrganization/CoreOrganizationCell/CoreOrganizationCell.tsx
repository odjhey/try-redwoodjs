import type { FindCoreOrganizationById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CoreOrganization from 'src/components/Admin/CoreOrganization/CoreOrganization'

export const QUERY = gql`
  query FindCoreOrganizationById($id: Int!) {
    coreOrganization: coreOrganization(id: $id) {
      id
      cuid
      name
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CoreOrganization not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreOrganization,
}: CellSuccessProps<FindCoreOrganizationById>) => {
  return <CoreOrganization coreOrganization={coreOrganization} />
}
