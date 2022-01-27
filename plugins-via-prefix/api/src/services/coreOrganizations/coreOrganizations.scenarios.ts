import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CoreOrganizationCreateArgs>({
  coreOrganization: {
    one: { data: { name: 'String', updatedAt: '2022-01-27T03:16:03Z' } },
    two: { data: { name: 'String', updatedAt: '2022-01-27T03:16:03Z' } },
  },
})

export type StandardScenario = typeof standard
