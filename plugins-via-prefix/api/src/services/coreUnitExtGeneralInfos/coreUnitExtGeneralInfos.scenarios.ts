import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CoreUnitExtGeneralInfoCreateArgs>(
  {
    coreUnitExtGeneralInfo: {
      one: {
        data: {
          updatedAt: '2022-01-27T13:10:50Z',
          model: 'String',
          description: 'String',
          unit: {
            create: {
              name: 'String',
              updatedAt: '2022-01-27T13:10:50Z',
              project: {
                create: {
                  name: 'String',
                  updatedAt: '2022-01-27T13:10:50Z',
                  development: {
                    create: {
                      name: 'String',
                      updatedAt: '2022-01-27T13:10:50Z',
                      organization: {
                        create: {
                          name: 'String',
                          updatedAt: '2022-01-27T13:10:50Z',
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
          updatedAt: '2022-01-27T13:10:50Z',
          model: 'String',
          description: 'String',
          unit: {
            create: {
              name: 'String',
              updatedAt: '2022-01-27T13:10:50Z',
              project: {
                create: {
                  name: 'String',
                  updatedAt: '2022-01-27T13:10:50Z',
                  development: {
                    create: {
                      name: 'String',
                      updatedAt: '2022-01-27T13:10:50Z',
                      organization: {
                        create: {
                          name: 'String',
                          updatedAt: '2022-01-27T13:10:50Z',
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
  }
)

export type StandardScenario = typeof standard
