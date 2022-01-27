import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CoreUnitExtGeneralInfoForm from 'src/components/Admin/CoreUnitExtGeneralInfo/CoreUnitExtGeneralInfoForm'

const CREATE_CORE_UNIT_EXT_GENERAL_INFO_MUTATION = gql`
  mutation CreateCoreUnitExtGeneralInfoMutation(
    $input: CreateCoreUnitExtGeneralInfoInput!
  ) {
    createCoreUnitExtGeneralInfo(input: $input) {
      id
    }
  }
`

const NewCoreUnitExtGeneralInfo = () => {
  const [createCoreUnitExtGeneralInfo, { loading, error }] = useMutation(
    CREATE_CORE_UNIT_EXT_GENERAL_INFO_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreUnitExtGeneralInfo created')
        navigate(routes.adminCoreUnitExtGeneralInfos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { unitId: parseInt(input.unitId) })
    createCoreUnitExtGeneralInfo({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New CoreUnitExtGeneralInfo
        </h2>
      </header>
      <div className="rw-segment-main">
        <CoreUnitExtGeneralInfoForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewCoreUnitExtGeneralInfo
