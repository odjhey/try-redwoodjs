import { Link, routes } from '@redwoodjs/router'
import { List, Navbar, NavbarProps, ScrollArea } from '@mantine/core'

const AdminNavbar = (props: Omit<NavbarProps, 'children'>) => {
  return (
    <Navbar {...props}>
      <Navbar.Section>
        <h1>Brand/Dash</h1>
      </Navbar.Section>
      <Navbar.Section grow mt="lg" component={ScrollArea}>
        <List>
          <List.Item>
            <Link to={routes.adminCoreOrganizations()}>Orgs</Link>
          </List.Item>
          <List.Item>
            <Link to={routes.adminCoreDevelopments()}>Developments</Link>
          </List.Item>
          <List.Item>
            <Link to={routes.adminCoreProjects()}>Projects</Link>
          </List.Item>
          <List.Item>
            <Link to={routes.adminCoreUnits()}>Units</Link>
          </List.Item>
        </List>
      </Navbar.Section>
      <Navbar.Section>
        <h3>footer</h3>
      </Navbar.Section>
    </Navbar>
  )
}

export default AdminNavbar
