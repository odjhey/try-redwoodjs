import type { FindCoreUnitExtGeneralInfoById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CoreUnitExtGeneralInfo from 'src/components/Admin/CoreUnitExtGeneralInfo/CoreUnitExtGeneralInfo'

export const QUERY = gql`
  query FindCoreUnitExtGeneralInfoById($id: Int!) {
    coreUnitExtGeneralInfo: coreUnitExtGeneralInfo(id: $id) {
      id
      updatedAt
      unitId
      model
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CoreUnitExtGeneralInfo not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreUnitExtGeneralInfo,
}: CellSuccessProps<FindCoreUnitExtGeneralInfoById>) => {
  return (
    <CoreUnitExtGeneralInfo coreUnitExtGeneralInfo={coreUnitExtGeneralInfo} />
  )
}
