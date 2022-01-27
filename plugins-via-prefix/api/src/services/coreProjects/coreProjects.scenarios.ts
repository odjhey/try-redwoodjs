import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CoreProjectCreateArgs>({
  coreProject: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2022-01-27T03:18:05Z',
        development: {
          create: {
            name: 'String',
            updatedAt: '2022-01-27T03:18:05Z',
            organization: {
              create: { name: 'String', updatedAt: '2022-01-27T03:18:05Z' },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updatedAt: '2022-01-27T03:18:05Z',
        development: {
          create: {
            name: 'String',
            updatedAt: '2022-01-27T03:18:05Z',
            organization: {
              create: { name: 'String', updatedAt: '2022-01-27T03:18:05Z' },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
