export const schema = gql`
  type CoreUnit {
    id: Int!
    cuid: String!
    name: String!
    updatedAt: DateTime!
    project: CoreProject!
    projectId: Int!
  }

  type Query {
    coreUnits: [CoreUnit!]! @requireAuth
    coreUnit(id: Int!): CoreUnit @requireAuth
  }

  input CreateCoreUnitInput {
    name: String!
    projectId: Int!
  }

  input UpdateCoreUnitInput {
    name: String
    projectId: Int
  }

  type Mutation {
    createCoreUnit(input: CreateCoreUnitInput!): CoreUnit! @requireAuth
    updateCoreUnit(id: Int!, input: UpdateCoreUnitInput!): CoreUnit!
      @requireAuth
    deleteCoreUnit(id: Int!): CoreUnit! @requireAuth
  }
`
