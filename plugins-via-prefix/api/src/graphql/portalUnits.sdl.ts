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

    thumbnailUrl: String
  }

  type PortalUnitsPayload {
    data: [PortalUnit!]!
    count: Int!
  }

  type Query {
    portalUnits: [PortalUnit!]! @skipAuth
    portalUnitsList(limit: Int, start: Int): PortalUnitsPayload! @skipAuth
  }
`
