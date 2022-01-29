import { Link, routes } from '@redwoodjs/router'
import {
  AppShell,
  Container,
  Group,
  SimpleGrid,
  Switch,
  Text,
  Title,
} from '@mantine/core'
import { useThemeSwitcher } from 'src/hooks/useThemeSwitcher'
import { MoonIcon, SunIcon } from '@modulz/radix-icons'

type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <AppShell
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <SimpleGrid cols={1}>
        <Title order={1}>HomePage</Title>
        <Group>
          <p>
            <Link to={routes.admin()}>
              <Text>Go to Admin</Text>
            </Link>
          </p>

          <ThemeSwitch />
        </Group>
      </SimpleGrid>

      <Container sx={{ height: '100%' }}>{children}</Container>
    </AppShell>
  )
}

const ThemeSwitch = () => {
  const { theme, toggleLightTheme } = useThemeSwitcher()
  return (
    <Group>
      <Switch
        checked={theme === 'light'}
        onChange={(event) => toggleLightTheme(event.currentTarget.checked)}
      />
      {theme === 'light' ? <SunIcon /> : <MoonIcon color={'white'} />}
      <Text>{theme}</Text>
    </Group>
  )
}

export default HomeLayout
