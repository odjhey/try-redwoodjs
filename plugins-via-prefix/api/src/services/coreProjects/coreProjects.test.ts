import {
  coreProjects,
  coreProject,
  createCoreProject,
  updateCoreProject,
  deleteCoreProject,
} from './coreProjects'
import type { StandardScenario } from './coreProjects.scenarios'

describe('coreProjects', () => {
  scenario('returns all coreProjects', async (scenario: StandardScenario) => {
    const result = await coreProjects()

    expect(result.length).toEqual(Object.keys(scenario.coreProject).length)
  })

  scenario(
    'returns a single coreProject',
    async (scenario: StandardScenario) => {
      const result = await coreProject({ id: scenario.coreProject.one.id })

      expect(result).toEqual(scenario.coreProject.one)
    }
  )

  scenario('creates a coreProject', async (scenario: StandardScenario) => {
    const result = await createCoreProject({
      input: {
        name: 'String',
        updatedAt: '2022-01-27T03:18:05Z',
        developmentId: scenario.coreProject.two.developmentId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual('2022-01-27T03:18:05Z')
    expect(result.developmentId).toEqual(scenario.coreProject.two.developmentId)
  })

  scenario('updates a coreProject', async (scenario: StandardScenario) => {
    const original = await coreProject({ id: scenario.coreProject.one.id })
    const result = await updateCoreProject({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a coreProject', async (scenario: StandardScenario) => {
    const original = await deleteCoreProject({
      id: scenario.coreProject.one.id,
    })
    const result = await coreProject({ id: original.id })

    expect(result).toEqual(null)
  })
})
