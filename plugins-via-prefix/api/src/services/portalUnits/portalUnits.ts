import { db } from 'src/lib/db'

export const portalUnits = async () => {
  const units = await db.coreUnit.findMany({
    include: {
      project: {
        include: {
          development: {
            include: { organization: true },
          },
        },
      },
      attachments: {
        include: {
          images: {
            include: { image: true },
          },
        },
      },
    },
  })

  return units.map((unit) => {
    return {
      ...unit,
      projectName: unit.project.name,
      projectId: unit.project.id,
      developmentName: unit.project.development.name,
      developmentId: unit.project.development.id,
      organizationName: unit.project.development.organization.name,
      organizationId: unit.project.development.organization.id,
      // TODO: fix this images[0], maybe use something like a thumnail field or something
      thumbnailUrl: unit.attachments?.images[0]?.image.url,
    }
  })
}
