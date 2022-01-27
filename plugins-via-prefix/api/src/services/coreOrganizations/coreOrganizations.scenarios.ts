import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CoreOrganizationCreateArgs>({
  coreOrganization: {
    one: { data: { name: 'String', updatedAt: '2022-01-27T03:11:33Z' } },
    two: { data: { name: 'String', updatedAt: '2022-01-27T03:11:33Z' } },
  },
})

export type StandardScenario = typeof standard
