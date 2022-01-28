import {
  imagesOnCoreAttachments,
  imagesOnCoreAttachment,
  createImagesOnCoreAttachment,
  updateImagesOnCoreAttachment,
  deleteImagesOnCoreAttachment,
} from './imagesOnCoreAttachments'
import type { StandardScenario } from './imagesOnCoreAttachments.scenarios'

describe('imagesOnCoreAttachments', () => {
  scenario(
    'returns all imagesOnCoreAttachments',
    async (scenario: StandardScenario) => {
      const result = await imagesOnCoreAttachments()

      expect(result.length).toEqual(
        Object.keys(scenario.imagesOnCoreAttachment).length
      )
    }
  )

  scenario(
    'returns a single imagesOnCoreAttachment',
    async (scenario: StandardScenario) => {
      const result = await imagesOnCoreAttachment({
        id: scenario.imagesOnCoreAttachment.one.id,
      })

      expect(result).toEqual(scenario.imagesOnCoreAttachment.one)
    }
  )

  scenario(
    'creates a imagesOnCoreAttachment',
    async (scenario: StandardScenario) => {
      const result = await createImagesOnCoreAttachment({
        input: {
          attachmentId: scenario.imagesOnCoreAttachment.two.attachmentId,
          imageId: scenario.imagesOnCoreAttachment.two.imageId,
        },
      })

      expect(result.attachmentId).toEqual(
        scenario.imagesOnCoreAttachment.two.attachmentId
      )
      expect(result.imageId).toEqual(
        scenario.imagesOnCoreAttachment.two.imageId
      )
    }
  )

  scenario(
    'updates a imagesOnCoreAttachment',
    async (scenario: StandardScenario) => {
      const original = await imagesOnCoreAttachment({
        id: scenario.imagesOnCoreAttachment.one.id,
      })
      const result = await updateImagesOnCoreAttachment({
        id: original.id,
        input: {
          attachmentId: scenario.imagesOnCoreAttachment.two.attachmentId,
        },
      })

      expect(result.attachmentId).toEqual(
        scenario.imagesOnCoreAttachment.two.attachmentId
      )
    }
  )

  scenario(
    'deletes a imagesOnCoreAttachment',
    async (scenario: StandardScenario) => {
      const original = await deleteImagesOnCoreAttachment({
        id: scenario.imagesOnCoreAttachment.one.id,
      })
      const result = await imagesOnCoreAttachment({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
