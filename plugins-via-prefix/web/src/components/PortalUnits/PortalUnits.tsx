import { SimpleGrid, useMantineTheme } from '@mantine/core'
import PortalUnit from 'src/components/PortalUnit/PortalUnit'

const PortalUnitsList = ({ portalUnits }) => {
  const theme = useMantineTheme()

  return (
    <div>
      <h2>{'PortalUnits'}</h2>

      <SimpleGrid
        cols={6}
        spacing={'xs'}
        breakpoints={[
          { maxWidth: theme.breakpoints.xl, cols: 4, spacing: 'md' },
          { maxWidth: theme.breakpoints.lg, cols: 3, spacing: 'md' },
          { maxWidth: theme.breakpoints.md, cols: 2, spacing: 'sm' },
          { maxWidth: theme.breakpoints.xs, cols: 1, spacing: 'sm' },
        ]}
      >
        {portalUnits.map((portalUnit) => (
          <PortalUnit key={portalUnit.id} portalUnit={portalUnit} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default PortalUnitsList
