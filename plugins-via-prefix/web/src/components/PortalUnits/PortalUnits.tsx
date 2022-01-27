import { SimpleGrid } from '@mantine/core'
import PortalUnit from 'src/components/PortalUnit/PortalUnit'

const PortalUnitsList = ({ portalUnits }) => {
  return (
    <div>
      <h2>{'PortalUnits'}</h2>

      <SimpleGrid cols={4}>
        {portalUnits.map((portalUnit) => (
          <PortalUnit key={portalUnit.id} portalUnit={portalUnit} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default PortalUnitsList
