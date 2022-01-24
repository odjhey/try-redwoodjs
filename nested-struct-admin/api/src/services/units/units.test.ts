import { units, unit, createUnit, updateUnit, deleteUnit } from './units'
import type { StandardScenario } from './units.scenarios'

describe('units', () => {
  scenario('returns all units', async (scenario: StandardScenario) => {
    const result = await units()

    expect(result.length).toEqual(Object.keys(scenario.unit).length)
  })

  scenario('returns a single unit', async (scenario: StandardScenario) => {
    const result = await unit({ id: scenario.unit.one.id })

    expect(result).toEqual(scenario.unit.one)
  })

  scenario('creates a unit', async () => {
    const result = await createUnit({
      input: { name: 'String', desc: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.desc).toEqual('String')
  })

  scenario('updates a unit', async (scenario: StandardScenario) => {
    const original = await unit({ id: scenario.unit.one.id })
    const result = await updateUnit({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a unit', async (scenario: StandardScenario) => {
    const original = await deleteUnit({ id: scenario.unit.one.id })
    const result = await unit({ id: original.id })

    expect(result).toEqual(null)
  })
})
