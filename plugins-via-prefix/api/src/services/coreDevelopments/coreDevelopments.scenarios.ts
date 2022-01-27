import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CoreDevelopmentCreateArgs>({
  coreDevelopment: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2022-01-27T03:17:55Z',
        organization: {
          create: { name: 'String', updatedAt: '2022-01-27T03:17:55Z' },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updatedAt: '2022-01-27T03:17:55Z',
        organization: {
          create: { name: 'String', updatedAt: '2022-01-27T03:17:55Z' },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
