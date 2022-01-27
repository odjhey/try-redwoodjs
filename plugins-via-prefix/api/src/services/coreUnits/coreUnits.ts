import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const coreUnits = () => {
  return db.coreUnit.findMany()
}

export const coreUnit = ({ id }: Prisma.CoreUnitWhereUniqueInput) => {
  return db.coreUnit.findUnique({
    where: { id },
  })
}

interface CreateCoreUnitArgs {
  input: Prisma.CoreUnitCreateInput
}

export const createCoreUnit = ({ input }: CreateCoreUnitArgs) => {
  return db.coreUnit.create({
    data: input,
  })
}

interface UpdateCoreUnitArgs extends Prisma.CoreUnitWhereUniqueInput {
  input: Prisma.CoreUnitUpdateInput
}

export const updateCoreUnit = ({ id, input }: UpdateCoreUnitArgs) => {
  return db.coreUnit.update({
    data: input,
    where: { id },
  })
}

export const deleteCoreUnit = ({ id }: Prisma.CoreUnitWhereUniqueInput) => {
  return db.coreUnit.delete({
    where: { id },
  })
}

export const CoreUnit = {
  project: (_obj, { root }: ResolverArgs<ReturnType<typeof coreUnit>>) =>
    db.coreUnit.findUnique({ where: { id: root.id } }).project(),
}
