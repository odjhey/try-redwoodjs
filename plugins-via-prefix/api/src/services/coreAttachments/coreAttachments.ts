import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const coreAttachments = () => {
  return db.coreAttachment.findMany()
}

export const coreAttachment = ({
  id,
}: Prisma.CoreAttachmentWhereUniqueInput) => {
  return db.coreAttachment.findUnique({
    where: { id },
  })
}

interface CreateCoreAttachmentArgs {
  input: Prisma.CoreAttachmentCreateInput
}

export const createCoreAttachment = ({ input }: CreateCoreAttachmentArgs) => {
  return db.coreAttachment.create({
    data: input,
  })
}

interface UpdateCoreAttachmentArgs
  extends Prisma.CoreAttachmentWhereUniqueInput {
  input: Prisma.CoreAttachmentUpdateInput
}

export const updateCoreAttachment = ({
  id,
  input,
}: UpdateCoreAttachmentArgs) => {
  return db.coreAttachment.update({
    data: input,
    where: { id },
  })
}

export const deleteCoreAttachment = ({
  id,
}: Prisma.CoreAttachmentWhereUniqueInput) => {
  return db.coreAttachment.delete({
    where: { id },
  })
}

export const CoreAttachment = {
  images: (_obj, { root }: ResolverArgs<ReturnType<typeof coreAttachment>>) =>
    db.coreAttachment.findUnique({ where: { id: root.id } }).images(),
  unit: (_obj, { root }: ResolverArgs<ReturnType<typeof coreAttachment>>) =>
    db.coreAttachment.findUnique({ where: { id: root.id } }).unit(),
}
