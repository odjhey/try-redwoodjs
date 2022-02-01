import {
  coreOrganizations,
  coreOrganization,
  createCoreOrganization,
  updateCoreOrganization,
  deleteCoreOrganization,
} from './coreOrganizations'
import type { StandardScenario } from './coreOrganizations.scenarios'

describe('coreOrganizations', () => {
  scenario(
    'returns all coreOrganizations',
    async (scenario: StandardScenario) => {
      const result = await coreOrganizations()

      expect(result.length).toEqual(
        Object.keys(scenario.coreOrganization).length
      )
    }
  )

  scenario(
    'returns a single coreOrganization',
    async (scenario: StandardScenario) => {
      const result = await coreOrganization({
        id: scenario.coreOrganization.one.id,
      })

      expect(result).toEqual(scenario.coreOrganization.one)
    }
  )

  scenario('creates a coreOrganization', async () => {
    const result = await createCoreOrganization({
      input: { name: 'String', updatedAt: '2022-02-01T07:02:53Z' },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual('2022-02-01T07:02:53Z')
  })

  scenario('updates a coreOrganization', async (scenario: StandardScenario) => {
    const original = await coreOrganization({
      id: scenario.coreOrganization.one.id,
    })
    const result = await updateCoreOrganization({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a coreOrganization', async (scenario: StandardScenario) => {
    const original = await deleteCoreOrganization({
      id: scenario.coreOrganization.one.id,
    })
    const result = await coreOrganization({ id: original.id })

    expect(result).toEqual(null)
  })
})
