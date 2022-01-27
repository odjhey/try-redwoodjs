export const schema = gql`
  type CoreProject {
    id: Int!
    cuid: String!
    name: String!
    updatedAt: DateTime!
    development: CoreDevelopment!
    developmentId: Int!
    units: [CoreUnit]!
  }

  type Query {
    coreProjects: [CoreProject!]! @requireAuth
    coreProject(id: Int!): CoreProject @requireAuth
  }

  input CreateCoreProjectInput {
    name: String!
    developmentId: Int!
  }

  input UpdateCoreProjectInput {
    name: String
    developmentId: Int
  }

  type Mutation {
    createCoreProject(input: CreateCoreProjectInput!): CoreProject! @requireAuth
    updateCoreProject(id: Int!, input: UpdateCoreProjectInput!): CoreProject!
      @requireAuth
    deleteCoreProject(id: Int!): CoreProject! @requireAuth
  }
`
