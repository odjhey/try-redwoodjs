import type { PortalUnitsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import PortalUnits from '../PortalUnits/PortalUnits'
import { Container, Pagination, SimpleGrid, Skeleton } from '@mantine/core'
import { navigate, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query PortalUnitsQuery($limit: Int!, $start: Int!) {
    portalUnitsList(limit: $limit, start: $start) {
      data {
        id
        cuid
        name
        updatedAt
        projectName
        projectId
        developmentName
        developmentId
        organizationName
        organizationId
        thumbnailUrl
      }
      count
    }
  }
`

export const beforeQuery = ({ limit, start }) => {
  return {
    variables: {
      limit: parseInt(limit || '5', 10),
      start: parseInt(start || '0', 10),
    },
  }
}

export const Loading = () => (
  <Container sx={{ height: '100vh' }}>
    <SimpleGrid spacing={'lg'} cols={3}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i}>
          <Skeleton height={50} circle mb="xl" />
          <Skeleton height={8} radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </div>
      ))}
    </SimpleGrid>
  </Container>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  portalUnitsList,
  limit,
  start,
}: CellSuccessProps<PortalUnitsQuery> & { limit: number; start: number }) => {
  const page = Math.floor(start / limit) + 1
  return (
    <>
      <Pagination
        total={Math.ceil(portalUnitsList.count / limit)}
        page={page}
        onChange={(page) => {
          navigate(routes.home({ start: (page - 1) * limit, limit }))
        }}
        sx={{ marginBottom: '1rem' }}
      ></Pagination>
      <PortalUnits portalUnits={portalUnitsList.data} />
    </>
  )
}
