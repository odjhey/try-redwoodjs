import {
  coreAttachments,
  coreAttachment,
  createCoreAttachment,
  updateCoreAttachment,
  deleteCoreAttachment,
} from './coreAttachments'
import type { StandardScenario } from './coreAttachments.scenarios'

describe('coreAttachments', () => {
  scenario(
    'returns all coreAttachments',
    async (scenario: StandardScenario) => {
      const result = await coreAttachments()

      expect(result.length).toEqual(Object.keys(scenario.coreAttachment).length)
    }
  )

  scenario(
    'returns a single coreAttachment',
    async (scenario: StandardScenario) => {
      const result = await coreAttachment({
        id: scenario.coreAttachment.one.id,
      })

      expect(result).toEqual(scenario.coreAttachment.one)
    }
  )

  scenario('creates a coreAttachment', async (scenario: StandardScenario) => {
    const result = await createCoreAttachment({
      input: {
        updatedAt: '2022-01-27T23:36:41Z',
        targetModel: 'String',
        unitId: scenario.coreAttachment.two.unitId,
      },
    })

    expect(result.updatedAt).toEqual('2022-01-27T23:36:41Z')
    expect(result.targetModel).toEqual('String')
    expect(result.unitId).toEqual(scenario.coreAttachment.two.unitId)
  })

  scenario('updates a coreAttachment', async (scenario: StandardScenario) => {
    const original = await coreAttachment({
      id: scenario.coreAttachment.one.id,
    })
    const result = await updateCoreAttachment({
      id: original.id,
      input: { updatedAt: '2022-01-28T23:36:41Z' },
    })

    expect(result.updatedAt).toEqual('2022-01-28T23:36:41Z')
  })

  scenario('deletes a coreAttachment', async (scenario: StandardScenario) => {
    const original = await deleteCoreAttachment({
      id: scenario.coreAttachment.one.id,
    })
    const result = await coreAttachment({ id: original.id })

    expect(result).toEqual(null)
  })
})
