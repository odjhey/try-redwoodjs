import type { EditCoreAttachmentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CoreAttachmentForm from 'src/components/Admin/CoreAttachment/CoreAttachmentForm'

export const QUERY = gql`
  query EditCoreAttachmentById($id: Int!) {
    coreAttachment: coreAttachment(id: $id) {
      id
      updatedAt
      targetModel
      unitId
    }
  }
`
const UPDATE_CORE_ATTACHMENT_MUTATION = gql`
  mutation UpdateCoreAttachmentMutation(
    $id: Int!
    $input: UpdateCoreAttachmentInput!
  ) {
    updateCoreAttachment(id: $id, input: $input) {
      id
      updatedAt
      targetModel
      unitId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreAttachment,
}: CellSuccessProps<EditCoreAttachmentById>) => {
  const [updateCoreAttachment, { loading, error }] = useMutation(
    UPDATE_CORE_ATTACHMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreAttachment updated')
        navigate(routes.adminCoreAttachments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { unitId: parseInt(input.unitId) })
    updateCoreAttachment({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CoreAttachment {coreAttachment.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CoreAttachmentForm
          coreAttachment={coreAttachment}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
