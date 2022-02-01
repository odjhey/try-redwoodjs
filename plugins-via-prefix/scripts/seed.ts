import { db } from 'api/src/lib/db'

export default async () => {
  try {
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`

    const seedData = [
      {
        org: {
          name: 'Organ01',
          developments: [
            {
              name: 'Development01',
              projects: [
                {
                  name: 'project 01',
                  units: [
                    { name: 'unit 01' },
                    { name: 'unit 02' },
                    { name: 'unit 03' },
                    { name: 'unit 04' },
                    { name: 'unit 05' },
                    { name: 'unit 06' },
                    { name: 'unit 07' },
                  ],
                },
              ],
            },
            {
              name: 'Development02',
              projects: [
                {
                  name: 'project ABC',
                  units: [
                    { name: 'NNNunit 01' },
                    { name: 'NNNunit 02' },
                    { name: 'NNNunit 03' },
                  ],
                },
                {
                  name: 'project XYZ',
                  units: [
                    { name: 'NNNunit 01' },
                    { name: 'NNNunit 02' },
                    { name: 'NNNunit 03' },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        org: {
          name: 'Organ02',
          developments: [
            {
              name: 'O2Development01',
              projects: [
                {
                  name: 'O2project 01',
                  units: [{ name: 'O2unit 01' }],
                },
              ],
            },
          ],
        },
      },
    ]

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    await Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      seedData.map(async (orgData) => {
        const record = await db.coreOrganization.create({
          data: {
            name: orgData.org.name,
          },
        })
        return [orgData, record]
      })
    )
      .then((result) => {
        const coreDevelopments = result.flatMap(
          ([orgData, record]: [any, any]) => {
            return orgData.org.developments.map((development) => ({
              orgRecord: record,
              development,
            }))
          }
        )
        return Promise.all(
          coreDevelopments.map(async (devData) => {
            const record = await db.coreDevelopment.create({
              data: {
                name: devData.development.name,
                organizationId: devData.orgRecord.id,
              },
            })
            return [devData, record]
          })
        )
      })

      .then((result) => {
        const coreProjects = result.flatMap(([devData, record]) => {
          return devData.development.projects.map((project) => ({
            devRecord: record,
            project,
          }))
        })

        return Promise.all(
          coreProjects.map(async (projectData) => {
            const record = await db.coreProject.create({
              data: {
                name: projectData.project.name,
                developmentId: projectData.devRecord.id,
              },
            })
            return [projectData, record]
          })
        )
      })

      .then((result) => {
        const unitsData = result.flatMap(([projectData, record]) => {
          return projectData.project.units.map((unit) => ({
            projectRecord: record,
            unit,
          }))
        })

        return Promise.all(
          unitsData.map(async (unitData) => {
            const record = await db.coreUnit.create({
              data: {
                name: unitData.unit.name,
                projectId: unitData.projectRecord.id,
              },
            })
            return [unitData, record]
          })
        )
      })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
