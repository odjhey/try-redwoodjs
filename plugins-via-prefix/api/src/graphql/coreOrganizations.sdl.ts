export const schema = gql`
  type CoreOrganization {
    id: Int!
    cuid: String!
    name: String!
    updatedAt: DateTime!
    developments: [CoreDevelopment]!
  }

  type Query {
    coreOrganizations: [CoreOrganization!]! @requireAuth
    coreOrganization(id: Int!): CoreOrganization @requireAuth
  }

  input CreateCoreOrganizationInput {
    name: String!
  }

  input UpdateCoreOrganizationInput {
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
