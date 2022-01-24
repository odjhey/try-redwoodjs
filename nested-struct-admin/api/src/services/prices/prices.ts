import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const prices = () => {
  return db.price.findMany()
}

export const price = ({ id }: Prisma.PriceWhereUniqueInput) => {
  return db.price.findUnique({
    where: { id },
  })
}

interface CreatePriceArgs {
  input: Prisma.PriceCreateInput
}

export const createPrice = ({ input }: CreatePriceArgs) => {
  return db.price.create({
    data: input,
  })
}

interface UpdatePriceArgs extends Prisma.PriceWhereUniqueInput {
  input: Prisma.PriceUpdateInput
}

export const updatePrice = ({ id, input }: UpdatePriceArgs) => {
  return db.price.update({
    data: input,
    where: { id },
  })
}

export const deletePrice = ({ id }: Prisma.PriceWhereUniqueInput) => {
  return db.price.delete({
    where: { id },
  })
}

export const Price = {
  unit: (_obj, { root }: ResolverArgs<ReturnType<typeof price>>) =>
    db.price.findUnique({ where: { id: root.id } }).unit(),
}
