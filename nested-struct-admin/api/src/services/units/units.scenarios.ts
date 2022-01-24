import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UnitCreateArgs>({
  unit: {
    one: { data: { name: 'String', desc: 'String' } },
    two: { data: { name: 'String', desc: 'String' } },
  },
})

export type StandardScenario = typeof standard
