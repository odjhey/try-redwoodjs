import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ImagesOnCoreAttachmentCreateArgs>(
  {
    imagesOnCoreAttachment: {
      one: {
        data: {
          attachment: {
            create: {
              updatedAt: '2022-01-27T23:37:29Z',
              targetModel: 'String',
              unit: {
                create: {
                  name: 'String',
                  updatedAt: '2022-01-27T23:37:29Z',
                  project: {
                    create: {
                      name: 'String',
                      updatedAt: '2022-01-27T23:37:29Z',
                      development: {
                        create: {
                          name: 'String',
                          updatedAt: '2022-01-27T23:37:29Z',
                          organization: {
                            create: {
                              name: 'String',
                              updatedAt: '2022-01-27T23:37:29Z',
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
          image: { create: { title: 'String', url: 'String' } },
        },
      },
      two: {
        data: {
          attachment: {
            create: {
              updatedAt: '2022-01-27T23:37:29Z',
              targetModel: 'String',
              unit: {
                create: {
                  name: 'String',
                  updatedAt: '2022-01-27T23:37:29Z',
                  project: {
                    create: {
                      name: 'String',
                      updatedAt: '2022-01-27T23:37:29Z',
                      development: {
                        create: {
                          name: 'String',
                          updatedAt: '2022-01-27T23:37:29Z',
                          organization: {
                            create: {
                              name: 'String',
                              updatedAt: '2022-01-27T23:37:29Z',
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
          image: { create: { title: 'String', url: 'String' } },
        },
      },
    },
  }
)

export type StandardScenario = typeof standard
