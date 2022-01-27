import type { FindCoreUnitExtGeneralInfoByUnitId } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CoreUnitExtGeneralInfo from 'src/components/Admin/CoreUnitExtGeneralInfo/CoreUnitExtGeneralInfo'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindCoreUnitExtGeneralInfoByUnitId($unitId: Int!) {
    coreUnitExtGeneralInfo: coreUnitExtGeneralInfoByUnitId(unitId: $unitId) {
      id
      updatedAt
      unitId
      model
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ unitId }) => (
  <div>
    CoreUnitExtGeneralInfo not found.{' '}
    <Link to={routes.adminNewCoreUnitExtGeneralInfo({ unitId })}>
      Create one?
    </Link>
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreUnitExtGeneralInfo,
}: CellSuccessProps<FindCoreUnitExtGeneralInfoByUnitId>) => {
  return (
    <CoreUnitExtGeneralInfo coreUnitExtGeneralInfo={coreUnitExtGeneralInfo} />
  )
}
