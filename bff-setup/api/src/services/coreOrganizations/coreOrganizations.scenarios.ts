import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CoreOrganizationCreateArgs>({
  coreOrganization: {
    one: { data: { name: 'String', updatedAt: '2022-02-01T07:02:53Z' } },
    two: { data: { name: 'String', updatedAt: '2022-02-01T07:02:53Z' } },
  },
})

export type StandardScenario = typeof standard
