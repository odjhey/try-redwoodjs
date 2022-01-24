import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PriceCreateArgs>({
  price: {
    one: {
      data: {
        name: 'String',
        amount: 2363325.7174288835,
        currency: 'String',
        unit: { create: { name: 'String', desc: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        amount: 8434393.784063669,
        currency: 'String',
        unit: { create: { name: 'String', desc: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
