import {
  Badge,
  Button,
  Card,
  Center,
  Group,
  Image,
  Text,
  useMantineTheme,
} from '@mantine/core'

const PortalUnit = ({ portalUnit }) => {
  // {"__typename":"PortalUnit","id":2,"cuid":"ckyws9re00146yrab2mofmijw","name":"unit2","updatedAt":"2022-01-27T09:38:03.624Z","projectName":"asdfasdf","projectId":1,"developmentName":"asdf","developmentId":1,"organizationName":"asdfasdf","organizationId":1}

  const theme = useMantineTheme()
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]

  // see responsive colors
  const bg =
    theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[1]

  return (
    <div style={{ width: 280 }}>
      <Card shadow="sm" padding="lg">
        <Card.Section sx={{ backgroundColor: bg }}>
          <Center>
            <Image
              src={portalUnit.thumbnailUrl}
              height={160}
              width={portalUnit.thumbnailUrl ? 'auto' : 160}
              alt="unit"
              withPlaceholder
            />
          </Center>
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{portalUnit.name}</Text>

          <Badge color="pink" variant="light">
            {portalUnit.id}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {JSON.stringify(portalUnit)}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Open
        </Button>
      </Card>
    </div>
  )
}

export default PortalUnit
