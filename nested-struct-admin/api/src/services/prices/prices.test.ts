import { prices, price, createPrice, updatePrice, deletePrice } from './prices'
import type { StandardScenario } from './prices.scenarios'

describe('prices', () => {
  scenario('returns all prices', async (scenario: StandardScenario) => {
    const result = await prices()

    expect(result.length).toEqual(Object.keys(scenario.price).length)
  })

  scenario('returns a single price', async (scenario: StandardScenario) => {
    const result = await price({ id: scenario.price.one.id })

    expect(result).toEqual(scenario.price.one)
  })

  scenario('creates a price', async (scenario: StandardScenario) => {
    const result = await createPrice({
      input: {
        name: 'String',
        amount: 3159098.532027902,
        currency: 'String',
        unitId: scenario.price.two.unitId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.amount).toEqual(3159098.532027902)
    expect(result.currency).toEqual('String')
    expect(result.unitId).toEqual(scenario.price.two.unitId)
  })

  scenario('updates a price', async (scenario: StandardScenario) => {
    const original = await price({ id: scenario.price.one.id })
    const result = await updatePrice({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a price', async (scenario: StandardScenario) => {
    const original = await deletePrice({ id: scenario.price.one.id })
    const result = await price({ id: original.id })

    expect(result).toEqual(null)
  })
})
