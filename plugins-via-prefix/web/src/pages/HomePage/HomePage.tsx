import { Group, Paper, Switch, Text } from '@mantine/core'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PortalUnitsCell from 'src/components/PortalUnitsCell'
import { useThemeSwitcher } from 'src/hooks/useThemeSwitcher'
import { SunIcon, MoonIcon } from '@modulz/radix-icons'

const HomePage = ({ limit = 5, start = 0 }) => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <p>
        <Link to={routes.admin()}>Go to Admin</Link>
      </p>
      <ThemeSwitch />
      <h1>HomePage</h1>

      <PortalUnitsCell limit={limit} start={start}></PortalUnitsCell>
    </>
  )
}

const ThemeSwitch = () => {
  const { theme, toggleLightTheme } = useThemeSwitcher()
  return (
    <Paper>
      <Group>
        <Switch
          checked={theme === 'light'}
          onChange={(event) => toggleLightTheme(event.currentTarget.checked)}
        />
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        <Text>{theme}</Text>
      </Group>
    </Paper>
  )
}

export default HomePage
