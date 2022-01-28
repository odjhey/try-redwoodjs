import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CoreAttachmentForm from 'src/components/Admin/CoreAttachment/CoreAttachmentForm'

const CREATE_CORE_ATTACHMENT_MUTATION = gql`
  mutation CreateCoreAttachmentMutation($input: CreateCoreAttachmentInput!) {
    createCoreAttachment(input: $input) {
      id
    }
  }
`

const NewCoreAttachment = () => {
  const [createCoreAttachment, { loading, error }] = useMutation(
    CREATE_CORE_ATTACHMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreAttachment created')
        navigate(routes.adminCoreAttachments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { unitId: parseInt(input.unitId) })
    createCoreAttachment({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CoreAttachment</h2>
      </header>
      <div className="rw-segment-main">
        <CoreAttachmentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCoreAttachment
