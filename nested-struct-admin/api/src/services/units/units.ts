import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const units = () => {
  return db.unit.findMany()
}

export const unit = ({ id }: Prisma.UnitWhereUniqueInput) => {
  return db.unit.findUnique({
    where: { id },
  })
}

interface CreateUnitArgs {
  input: Prisma.UnitCreateInput
}

export const createUnit = ({ input }: CreateUnitArgs) => {
  return db.unit.create({
    data: input,
  })
}

interface UpdateUnitArgs extends Prisma.UnitWhereUniqueInput {
  input: Prisma.UnitUpdateInput
}

export const updateUnit = ({ id, input }: UpdateUnitArgs) => {
  return db.unit.update({
    data: input,
    where: { id },
  })
}

export const deleteUnit = ({ id }: Prisma.UnitWhereUniqueInput) => {
  return db.unit.delete({
    where: { id },
  })
}

export const Unit = {
  prices: (_obj, { root }: ResolverArgs<ReturnType<typeof unit>>) =>
    db.unit.findUnique({ where: { id: root.id } }).prices(),
}
