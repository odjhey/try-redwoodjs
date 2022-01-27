import {
  coreUnits,
  coreUnit,
  createCoreUnit,
  updateCoreUnit,
  deleteCoreUnit,
} from './coreUnits'
import type { StandardScenario } from './coreUnits.scenarios'

describe('coreUnits', () => {
  scenario('returns all coreUnits', async (scenario: StandardScenario) => {
    const result = await coreUnits()

    expect(result.length).toEqual(Object.keys(scenario.coreUnit).length)
  })

  scenario('returns a single coreUnit', async (scenario: StandardScenario) => {
    const result = await coreUnit({ id: scenario.coreUnit.one.id })

    expect(result).toEqual(scenario.coreUnit.one)
  })

  scenario('creates a coreUnit', async (scenario: StandardScenario) => {
    const result = await createCoreUnit({
      input: {
        name: 'String',
        updatedAt: '2022-01-27T03:18:47Z',
        projectId: scenario.coreUnit.two.projectId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual('2022-01-27T03:18:47Z')
    expect(result.projectId).toEqual(scenario.coreUnit.two.projectId)
  })

  scenario('updates a coreUnit', async (scenario: StandardScenario) => {
    const original = await coreUnit({ id: scenario.coreUnit.one.id })
    const result = await updateCoreUnit({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a coreUnit', async (scenario: StandardScenario) => {
    const original = await deleteCoreUnit({ id: scenario.coreUnit.one.id })
    const result = await coreUnit({ id: original.id })

    expect(result).toEqual(null)
  })
})
