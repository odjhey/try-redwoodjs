import { AppShell, Navbar, Header } from '@mantine/core'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar height={600} padding="xs" width={{ base: 300 }}>
          <Navbar.Section>
            <h1>Brand</h1>
          </Navbar.Section>
          <Navbar.Section grow mt="lg">
            <h2>mainlinks</h2>
          </Navbar.Section>
          <Navbar.Section>
            <h3>footer</h3>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} padding="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  )
}

export default AdminLayout
