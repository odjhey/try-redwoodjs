import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const coreDevelopments = () => {
  return db.coreDevelopment.findMany()
}

export const coreDevelopment = ({
  id,
}: Prisma.CoreDevelopmentWhereUniqueInput) => {
  return db.coreDevelopment.findUnique({
    where: { id },
  })
}

interface CreateCoreDevelopmentArgs {
  input: Prisma.CoreDevelopmentCreateInput
}

export const createCoreDevelopment = ({ input }: CreateCoreDevelopmentArgs) => {
  return db.coreDevelopment.create({
    data: input,
  })
}

interface UpdateCoreDevelopmentArgs
  extends Prisma.CoreDevelopmentWhereUniqueInput {
  input: Prisma.CoreDevelopmentUpdateInput
}

export const updateCoreDevelopment = ({
  id,
  input,
}: UpdateCoreDevelopmentArgs) => {
  return db.coreDevelopment.update({
    data: input,
    where: { id },
  })
}

export const deleteCoreDevelopment = ({
  id,
}: Prisma.CoreDevelopmentWhereUniqueInput) => {
  return db.coreDevelopment.delete({
    where: { id },
  })
}

export const CoreDevelopment = {
  organization: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof coreDevelopment>>
  ) => db.coreDevelopment.findUnique({ where: { id: root.id } }).organization(),
  projects: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof coreDevelopment>>
  ) => db.coreDevelopment.findUnique({ where: { id: root.id } }).projects(),
}
