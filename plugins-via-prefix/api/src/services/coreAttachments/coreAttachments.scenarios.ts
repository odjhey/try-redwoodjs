import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CoreAttachmentCreateArgs>({
  coreAttachment: {
    one: {
      data: {
        updatedAt: '2022-01-27T23:36:41Z',
        targetModel: 'String',
        unit: {
          create: {
            name: 'String',
            updatedAt: '2022-01-27T23:36:41Z',
            project: {
              create: {
                name: 'String',
                updatedAt: '2022-01-27T23:36:41Z',
                development: {
                  create: {
                    name: 'String',
                    updatedAt: '2022-01-27T23:36:41Z',
                    organization: {
                      create: {
                        name: 'String',
                        updatedAt: '2022-01-27T23:36:41Z',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-01-27T23:36:41Z',
        targetModel: 'String',
        unit: {
          create: {
            name: 'String',
            updatedAt: '2022-01-27T23:36:41Z',
            project: {
              create: {
                name: 'String',
                updatedAt: '2022-01-27T23:36:41Z',
                development: {
                  create: {
                    name: 'String',
                    updatedAt: '2022-01-27T23:36:41Z',
                    organization: {
                      create: {
                        name: 'String',
                        updatedAt: '2022-01-27T23:36:41Z',
                      },
                    },
                  },
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
