import {
  coreUnitExtGeneralInfos,
  coreUnitExtGeneralInfo,
  createCoreUnitExtGeneralInfo,
  updateCoreUnitExtGeneralInfo,
  deleteCoreUnitExtGeneralInfo,
} from './coreUnitExtGeneralInfos'
import type { StandardScenario } from './coreUnitExtGeneralInfos.scenarios'

describe('coreUnitExtGeneralInfos', () => {
  scenario(
    'returns all coreUnitExtGeneralInfos',
    async (scenario: StandardScenario) => {
      const result = await coreUnitExtGeneralInfos()

      expect(result.length).toEqual(
        Object.keys(scenario.coreUnitExtGeneralInfo).length
      )
    }
  )

  scenario(
    'returns a single coreUnitExtGeneralInfo',
    async (scenario: StandardScenario) => {
      const result = await coreUnitExtGeneralInfo({
        id: scenario.coreUnitExtGeneralInfo.one.id,
      })

      expect(result).toEqual(scenario.coreUnitExtGeneralInfo.one)
    }
  )

  scenario(
    'creates a coreUnitExtGeneralInfo',
    async (scenario: StandardScenario) => {
      const result = await createCoreUnitExtGeneralInfo({
        input: {
          updatedAt: '2022-01-27T13:10:50Z',
          unitId: scenario.coreUnitExtGeneralInfo.two.unitId,
          model: 'String',
          description: 'String',
        },
      })

      expect(result.updatedAt).toEqual('2022-01-27T13:10:50Z')
      expect(result.unitId).toEqual(scenario.coreUnitExtGeneralInfo.two.unitId)
      expect(result.model).toEqual('String')
      expect(result.description).toEqual('String')
    }
  )

  scenario(
    'updates a coreUnitExtGeneralInfo',
    async (scenario: StandardScenario) => {
      const original = await coreUnitExtGeneralInfo({
        id: scenario.coreUnitExtGeneralInfo.one.id,
      })
      const result = await updateCoreUnitExtGeneralInfo({
        id: original.id,
        input: { updatedAt: '2022-01-28T13:10:50Z' },
      })

      expect(result.updatedAt).toEqual('2022-01-28T13:10:50Z')
    }
  )

  scenario(
    'deletes a coreUnitExtGeneralInfo',
    async (scenario: StandardScenario) => {
      const original = await deleteCoreUnitExtGeneralInfo({
        id: scenario.coreUnitExtGeneralInfo.one.id,
      })
      const result = await coreUnitExtGeneralInfo({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
