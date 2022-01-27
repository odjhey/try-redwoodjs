import type { EditCoreProjectById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CoreProjectForm from 'src/components/Admin/CoreProject/CoreProjectForm'

export const QUERY = gql`
  query EditCoreProjectById($id: Int!) {
    coreProject: coreProject(id: $id) {
      id
      cuid
      name
      updatedAt
      developmentId
    }
  }
`
const UPDATE_CORE_PROJECT_MUTATION = gql`
  mutation UpdateCoreProjectMutation(
    $id: Int!
    $input: UpdateCoreProjectInput!
  ) {
    updateCoreProject(id: $id, input: $input) {
      id
      cuid
      name
      updatedAt
      developmentId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  coreProject,
}: CellSuccessProps<EditCoreProjectById>) => {
  const [updateCoreProject, { loading, error }] = useMutation(
    UPDATE_CORE_PROJECT_MUTATION,
    {
      onCompleted: () => {
        toast.success('CoreProject updated')
        navigate(routes.adminCoreProjects())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      developmentId: parseInt(input.developmentId),
    })
    updateCoreProject({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CoreProject {coreProject.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CoreProjectForm
          coreProject={coreProject}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
