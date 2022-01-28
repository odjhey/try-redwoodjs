import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const imagesOnCoreAttachments = () => {
  return db.imagesOnCoreAttachment.findMany()
}

export const imagesOnCoreAttachment = ({
  id,
}: Prisma.ImagesOnCoreAttachmentWhereUniqueInput) => {
  return db.imagesOnCoreAttachment.findUnique({
    where: { id },
  })
}

interface CreateImagesOnCoreAttachmentArgs {
  input: Prisma.ImagesOnCoreAttachmentCreateInput
}

export const createImagesOnCoreAttachment = ({
  input,
}: CreateImagesOnCoreAttachmentArgs) => {
  return db.imagesOnCoreAttachment.create({
    data: input,
  })
}

interface UpdateImagesOnCoreAttachmentArgs
  extends Prisma.ImagesOnCoreAttachmentWhereUniqueInput {
  input: Prisma.ImagesOnCoreAttachmentUpdateInput
}

export const updateImagesOnCoreAttachment = ({
  id,
  input,
}: UpdateImagesOnCoreAttachmentArgs) => {
  return db.imagesOnCoreAttachment.update({
    data: input,
    where: { id },
  })
}

export const deleteImagesOnCoreAttachment = ({
  id,
}: Prisma.ImagesOnCoreAttachmentWhereUniqueInput) => {
  return db.imagesOnCoreAttachment.delete({
    where: { id },
  })
}

export const ImagesOnCoreAttachment = {
  attachment: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof imagesOnCoreAttachment>>
  ) =>
    db.imagesOnCoreAttachment
      .findUnique({ where: { id: root.id } })
      .attachment(),
  image: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof imagesOnCoreAttachment>>
  ) => db.imagesOnCoreAttachment.findUnique({ where: { id: root.id } }).image(),
}
