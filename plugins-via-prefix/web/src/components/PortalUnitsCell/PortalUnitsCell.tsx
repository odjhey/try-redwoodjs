import type { PortalUnitsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import PortalUnits from '../PortalUnits/PortalUnits'

export const QUERY = gql`
  query PortalUnitsQuery {
    portalUnits {
      id
      cuid
      name
      updatedAt
      projectName
      projectId
      developmentName
      developmentId
      organizationName
      organizationId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  portalUnits,
}: CellSuccessProps<PortalUnitsQuery>) => {
  return <PortalUnits portalUnits={portalUnits} />
}
