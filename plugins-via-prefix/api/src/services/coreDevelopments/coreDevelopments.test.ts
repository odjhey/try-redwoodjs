import {
  coreDevelopments,
  coreDevelopment,
  createCoreDevelopment,
  updateCoreDevelopment,
  deleteCoreDevelopment,
} from './coreDevelopments'
import type { StandardScenario } from './coreDevelopments.scenarios'

describe('coreDevelopments', () => {
  scenario(
    'returns all coreDevelopments',
    async (scenario: StandardScenario) => {
      const result = await coreDevelopments()

      expect(result.length).toEqual(
        Object.keys(scenario.coreDevelopment).length
      )
    }
  )

  scenario(
    'returns a single coreDevelopment',
    async (scenario: StandardScenario) => {
      const result = await coreDevelopment({
        id: scenario.coreDevelopment.one.id,
      })

      expect(result).toEqual(scenario.coreDevelopment.one)
    }
  )

  scenario('creates a coreDevelopment', async (scenario: StandardScenario) => {
    const result = await createCoreDevelopment({
      input: {
        name: 'String',
        updatedAt: '2022-01-27T03:17:55Z',
        organizationId: scenario.coreDevelopment.two.organizationId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual('2022-01-27T03:17:55Z')
    expect(result.organizationId).toEqual(
      scenario.coreDevelopment.two.organizationId
    )
  })

  scenario('updates a coreDevelopment', async (scenario: StandardScenario) => {
    const original = await coreDevelopment({
      id: scenario.coreDevelopment.one.id,
    })
    const result = await updateCoreDevelopment({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a coreDevelopment', async (scenario: StandardScenario) => {
    const original = await deleteCoreDevelopment({
      id: scenario.coreDevelopment.one.id,
    })
    const result = await coreDevelopment({ id: original.id })

    expect(result).toEqual(null)
  })
})
