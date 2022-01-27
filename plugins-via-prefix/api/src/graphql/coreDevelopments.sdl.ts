export const schema = gql`
  type CoreDevelopment {
    id: Int!
    cuid: String!
    name: String!
    updatedAt: DateTime!
    organization: CoreOrganization!
    organizationId: Int!
    projects: [CoreProject]!
  }

  type Query {
    coreDevelopments: [CoreDevelopment!]! @requireAuth
    coreDevelopment(id: Int!): CoreDevelopment @requireAuth
  }

  input CreateCoreDevelopmentInput {
    name: String!
    organizationId: Int!
  }

  input UpdateCoreDevelopmentInput {
    name: String
    organizationId: Int
  }

  type Mutation {
    createCoreDevelopment(input: CreateCoreDevelopmentInput!): CoreDevelopment!
      @requireAuth
    updateCoreDevelopment(
      id: Int!
      input: UpdateCoreDevelopmentInput!
    ): CoreDevelopment! @requireAuth
    deleteCoreDevelopment(id: Int!): CoreDevelopment! @requireAuth
  }
`
