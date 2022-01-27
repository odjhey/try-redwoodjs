import type { FindCoreUnitExtGeneralInfos } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import CoreUnitExtGeneralInfos from 'src/components/Admin/CoreUnitExtGeneralInfo/CoreUnitExtGeneralInfos'

export const QUERY = gql`
  query FindCoreUnitExtGeneralInfos {
    coreUnitExtGeneralInfos {
      id
      updatedAt
      unitId
      model
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No coreUnitExtGeneralInfos yet. '}
      <Link to={routes.adminNewCoreUnitExtGeneralInfo()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreUnitExtGeneralInfos,
}: CellSuccessProps<FindCoreUnitExtGeneralInfos>) => {
  return (
    <CoreUnitExtGeneralInfos
      coreUnitExtGeneralInfos={coreUnitExtGeneralInfos}
    />
  )
}
