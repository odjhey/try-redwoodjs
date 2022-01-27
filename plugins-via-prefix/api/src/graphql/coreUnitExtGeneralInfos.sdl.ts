export const schema = gql`
  type CoreUnitExtGeneralInfo {
    id: Int!
    updatedAt: DateTime!
    unit: CoreUnit!
    unitId: Int!
    model: String!
    description: String!
  }

  type Query {
    coreUnitExtGeneralInfos: [CoreUnitExtGeneralInfo!]! @requireAuth
    coreUnitExtGeneralInfo(id: Int!): CoreUnitExtGeneralInfo @requireAuth
    coreUnitExtGeneralInfoByUnitId(unitId: Int!): CoreUnitExtGeneralInfo
      @requireAuth
  }

  input CreateCoreUnitExtGeneralInfoInput {
    unitId: Int!
    model: String!
    description: String!
  }

  input UpdateCoreUnitExtGeneralInfoInput {
    unitId: Int
    model: String
    description: String
  }

  type Mutation {
    createCoreUnitExtGeneralInfo(
      input: CreateCoreUnitExtGeneralInfoInput!
    ): CoreUnitExtGeneralInfo! @requireAuth
    updateCoreUnitExtGeneralInfo(
      id: Int!
      input: UpdateCoreUnitExtGeneralInfoInput!
    ): CoreUnitExtGeneralInfo! @requireAuth
    deleteCoreUnitExtGeneralInfo(id: Int!): CoreUnitExtGeneralInfo! @requireAuth
  }
`
