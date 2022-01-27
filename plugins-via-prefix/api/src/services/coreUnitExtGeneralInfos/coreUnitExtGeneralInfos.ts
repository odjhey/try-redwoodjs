import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const coreUnitExtGeneralInfos = () => {
  return db.coreUnitExtGeneralInfo.findMany()
}

export const coreUnitExtGeneralInfo = ({
  id,
}: Prisma.CoreUnitExtGeneralInfoWhereUniqueInput) => {
  return db.coreUnitExtGeneralInfo.findUnique({
    where: { id },
  })
}

interface CreateCoreUnitExtGeneralInfoArgs {
  input: Prisma.CoreUnitExtGeneralInfoCreateInput
}

export const createCoreUnitExtGeneralInfo = ({
  input,
}: CreateCoreUnitExtGeneralInfoArgs) => {
  return db.coreUnitExtGeneralInfo.create({
    data: input,
  })
}

interface UpdateCoreUnitExtGeneralInfoArgs
  extends Prisma.CoreUnitExtGeneralInfoWhereUniqueInput {
  input: Prisma.CoreUnitExtGeneralInfoUpdateInput
}

export const updateCoreUnitExtGeneralInfo = ({
  id,
  input,
}: UpdateCoreUnitExtGeneralInfoArgs) => {
  return db.coreUnitExtGeneralInfo.update({
    data: input,
    where: { id },
  })
}

export const deleteCoreUnitExtGeneralInfo = ({
  id,
}: Prisma.CoreUnitExtGeneralInfoWhereUniqueInput) => {
  return db.coreUnitExtGeneralInfo.delete({
    where: { id },
  })
}

export const CoreUnitExtGeneralInfo = {
  unit: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof coreUnitExtGeneralInfo>>
  ) => db.coreUnitExtGeneralInfo.findUnique({ where: { id: root.id } }).unit(),
}
