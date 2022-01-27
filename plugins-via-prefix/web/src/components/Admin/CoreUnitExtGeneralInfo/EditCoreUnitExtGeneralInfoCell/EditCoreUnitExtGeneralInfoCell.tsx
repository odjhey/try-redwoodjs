import type { EditCoreUnitExtGeneralInfoById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CoreUnitExtGeneralInfoForm from 'src/components/Admin/CoreUnitExtGeneralInfo/CoreUnitExtGeneralInfoForm'

export const QUERY = gql`
  query EditCoreUnitExtGeneralInfoById($id: Int!) {
    coreUnitExtGeneralInfo: coreUnitExtGeneralInfo(id: $id) {
      id
      updatedAt
      unitId
      model
      description
    }
  }
`
const UPDATE_CORE_UNIT_EXT_GENERAL_INFO_MUTATION = gql`
  mutation UpdateCoreUnitExtGeneralInfoMutation(
    $id: Int!
    $input: UpdateCoreUnitExtGeneralInfoInput!
  ) {
    updateCoreUnitExtGeneralInfo(id: $id, input: $input) {
      id
      updatedAt
      unitId
      model
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreUnitExtGeneralInfo,
}: CellSuccessProps<EditCoreUnitExtGeneralInfoById>) => {
  const [updateCoreUnitExtGeneralInfo, { loading, error }] = useMutation(
    UPDATE_CORE_UNIT_EXT_GENERAL_INFO_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreUnitExtGeneralInfo updated')
        navigate(routes.adminCoreUnitExtGeneralInfos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { unitId: parseInt(input.unitId) })
    updateCoreUnitExtGeneralInfo({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CoreUnitExtGeneralInfo {coreUnitExtGeneralInfo.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CoreUnitExtGeneralInfoForm
          coreUnitExtGeneralInfo={coreUnitExtGeneralInfo}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
