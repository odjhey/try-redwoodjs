import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CoreUnitForm from 'src/components/Admin/CoreUnit/CoreUnitForm'

const CREATE_CORE_UNIT_MUTATION = gql`
  mutation CreateCoreUnitMutation($input: CreateCoreUnitInput!) {
    createCoreUnit(input: $input) {
      id
    }
  }
`

const NewCoreUnit = () => {
  const [createCoreUnit, { loading, error }] = useMutation(
    CREATE_CORE_UNIT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreUnit created')
        navigate(routes.adminCoreUnits())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      projectId: parseInt(input.projectId),
    })
    createCoreUnit({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CoreUnit</h2>
      </header>
      <div className="rw-segment-main">
        <CoreUnitForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCoreUnit
