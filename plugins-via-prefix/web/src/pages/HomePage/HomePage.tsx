import { Group, Switch, Text } from '@mantine/core'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PortalUnitsCell from 'src/components/PortalUnitsCell'
import { useThemeSwitcher } from 'src/hooks/useThemeSwitcher'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <p>
        <Link to={routes.admin()}>Go to Admin</Link>
      </p>
      <ThemeSwitch />
      <h1>HomePage</h1>
      <PortalUnitsCell></PortalUnitsCell>
    </>
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
      <Text>{theme}</Text>
    </Group>
  )
}

export default HomePage
