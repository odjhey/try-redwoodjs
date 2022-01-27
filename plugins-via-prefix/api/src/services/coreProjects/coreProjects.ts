import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const coreProjects = () => {
  return db.coreProject.findMany()
}

export const coreProject = ({ id }: Prisma.CoreProjectWhereUniqueInput) => {
  return db.coreProject.findUnique({
    where: { id },
  })
}

interface CreateCoreProjectArgs {
  input: Prisma.CoreProjectCreateInput
}

export const createCoreProject = ({ input }: CreateCoreProjectArgs) => {
  return db.coreProject.create({
    data: input,
  })
}

interface UpdateCoreProjectArgs extends Prisma.CoreProjectWhereUniqueInput {
  input: Prisma.CoreProjectUpdateInput
}

export const updateCoreProject = ({ id, input }: UpdateCoreProjectArgs) => {
  return db.coreProject.update({
    data: input,
    where: { id },
  })
}

export const deleteCoreProject = ({
  id,
}: Prisma.CoreProjectWhereUniqueInput) => {
  return db.coreProject.delete({
    where: { id },
  })
}

export const CoreProject = {
  development: (_obj, { root }: ResolverArgs<ReturnType<typeof coreProject>>) =>
    db.coreProject.findUnique({ where: { id: root.id } }).development(),
  units: (_obj, { root }: ResolverArgs<ReturnType<typeof coreProject>>) =>
    db.coreProject.findUnique({ where: { id: root.id } }).units(),
}
