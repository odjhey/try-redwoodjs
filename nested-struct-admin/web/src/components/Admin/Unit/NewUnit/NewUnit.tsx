import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import UnitForm from 'src/components/Admin/Unit/UnitForm'

const CREATE_UNIT_MUTATION = gql`
  mutation CreateUnitMutation($input: CreateUnitInput!) {
    createUnit(input: $input) {
      id
    }
  }
`

const NewUnit = () => {
  const [createUnit, { loading, error }] = useMutation(CREATE_UNIT_MUTATION, {
    onCompleted: () => {
      toast.success('Unit created')
      navigate(routes.adminUnits())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createUnit({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Unit</h2>
      </header>
      <div className="rw-segment-main">
        <UnitForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUnit
