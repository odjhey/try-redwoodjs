import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const coreOrganizations = () => {
  return db.coreOrganization.findMany()
}

export const coreOrganization = ({
  id,
}: Prisma.CoreOrganizationWhereUniqueInput) => {
  return db.coreOrganization.findUnique({
    where: { id },
  })
}

interface CreateCoreOrganizationArgs {
  input: Prisma.CoreOrganizationCreateInput
}

export const createCoreOrganization = ({
  input,
}: CreateCoreOrganizationArgs) => {
  return db.coreOrganization.create({
    data: input,
  })
}

interface UpdateCoreOrganizationArgs
  extends Prisma.CoreOrganizationWhereUniqueInput {
  input: Prisma.CoreOrganizationUpdateInput
}

export const updateCoreOrganization = ({
  id,
  input,
}: UpdateCoreOrganizationArgs) => {
  return db.coreOrganization.update({
    data: input,
    where: { id },
  })
}

export const deleteCoreOrganization = ({
  id,
}: Prisma.CoreOrganizationWhereUniqueInput) => {
  return db.coreOrganization.delete({
    where: { id },
  })
}
