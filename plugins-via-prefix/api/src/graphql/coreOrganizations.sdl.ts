export const schema = gql`
  type CoreOrganization {
    id: Int!
    cuid: String!
    name: String!
    updatedAt: DateTime!
  }

  type Query {
    coreOrganizations: [CoreOrganization!]! @requireAuth
    coreOrganization(id: Int!): CoreOrganization @requireAuth
  }

  input CreateCoreOrganizationInput {
    cuid: String!
    name: String!
  }

  input UpdateCoreOrganizationInput {
    cuid: String
    name: String
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
