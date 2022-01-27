export const schema = gql`
  type PortalUnit {
    id: Int!
    cuid: String!
    name: String!
    updatedAt: DateTime!

    projectName: String!
    projectId: Int!
    developmentName: String!
    developmentId: Int!
    organizationName: String!
    organizationId: Int!
  }

  type Query {
    portalUnits: [PortalUnit!]! @skipAuth
  }
`
