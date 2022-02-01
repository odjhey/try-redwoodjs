export const schema = gql`
  type CoreAttachment {
    id: Int!
    updatedAt: DateTime!
    targetModel: String!
    images: [ImagesOnCoreAttachment]!
    unit: CoreUnit!
    unitId: Int!
  }

  type Query {
    coreAttachments: [CoreAttachment!]! @requireAuth
    coreAttachment(id: Int!): CoreAttachment @requireAuth
  }

  input CreateCoreAttachmentInput {
    targetModel: String!
    unitId: Int!
  }

  input UpdateCoreAttachmentInput {
    targetModel: String
    unitId: Int
  }

  type Mutation {
    createCoreAttachment(input: CreateCoreAttachmentInput!): CoreAttachment!
      @requireAuth
    updateCoreAttachment(
      id: Int!
      input: UpdateCoreAttachmentInput!
    ): CoreAttachment! @requireAuth
    deleteCoreAttachment(id: Int!): CoreAttachment! @requireAuth
  }
`
