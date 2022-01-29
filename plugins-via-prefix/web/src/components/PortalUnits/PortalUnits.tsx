import { SimpleGrid, Title } from '@mantine/core'
import PortalUnit from 'src/components/PortalUnit/PortalUnit'

const PortalUnitsList = ({ portalUnits }) => {
  return (
    <>
      <Title order={1}>{'PortalUnits'}</Title>

      <SimpleGrid cols={3} spacing={'lg'}>
        {portalUnits.map((portalUnit) => (
          <PortalUnit key={portalUnit.id} portalUnit={portalUnit} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default PortalUnitsList
