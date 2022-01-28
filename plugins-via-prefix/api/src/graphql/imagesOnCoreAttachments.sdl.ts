export const schema = gql`
  type ImagesOnCoreAttachment {
    id: Int!
    attachmentId: Int!
    attachment: CoreAttachment!
    imageId: Int!
    image: Image!
  }

  type Query {
    imagesOnCoreAttachments: [ImagesOnCoreAttachment!]! @requireAuth
    imagesOnCoreAttachment(id: Int!): ImagesOnCoreAttachment @requireAuth
  }

  input CreateImagesOnCoreAttachmentInput {
    attachmentId: Int!
    imageId: Int!
  }

  input UpdateImagesOnCoreAttachmentInput {
    attachmentId: Int
    imageId: Int
  }

  type Mutation {
    createImagesOnCoreAttachment(
      input: CreateImagesOnCoreAttachmentInput!
    ): ImagesOnCoreAttachment! @requireAuth
    updateImagesOnCoreAttachment(
      id: Int!
      input: UpdateImagesOnCoreAttachmentInput!
    ): ImagesOnCoreAttachment! @requireAuth
    deleteImagesOnCoreAttachment(id: Int!): ImagesOnCoreAttachment! @requireAuth
  }
`
