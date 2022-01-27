import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CoreUnitCreateArgs>({
  coreUnit: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2022-01-27T03:18:47Z',
        project: {
          create: {
            name: 'String',
            updatedAt: '2022-01-27T03:18:47Z',
            development: {
              create: {
                name: 'String',
                updatedAt: '2022-01-27T03:18:47Z',
                organization: {
                  create: { name: 'String', updatedAt: '2022-01-27T03:18:47Z' },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updatedAt: '2022-01-27T03:18:47Z',
        project: {
          create: {
            name: 'String',
            updatedAt: '2022-01-27T03:18:47Z',
            development: {
              create: {
                name: 'String',
                updatedAt: '2022-01-27T03:18:47Z',
                organization: {
                  create: { name: 'String', updatedAt: '2022-01-27T03:18:47Z' },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
