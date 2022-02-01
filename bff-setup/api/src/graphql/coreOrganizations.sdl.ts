export const schema = gql`
  type CoreOrganization {
    id: Int!
    cuid: String!
    name: String!
    updatedAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    coreOrganizations: [CoreOrganization!]! @requireAuth
    coreOrganization(id: Int!): CoreOrganization @requireAuth
  }

  input CreateCoreOrganizationInput {
    cuid: String!
    name: String!
    deletedAt: DateTime
  }

  input UpdateCoreOrganizationInput {
    cuid: String
    name: String
    deletedAt: DateTime
  }

  type Mutation {
    createCoreOrganization(
      input: CreateCoreOrganizationInput!
    ): CoreOrganization! @requireAuth
    updateCoreOrganization(
      id: Int!
      input: UpdateCoreOrganizationInput!
    ): CoreOrganization! @requireAuth
    deleteCoreOrganization(id: Int!): CoreOrganization! @requireAuth
  }
`
