import { AppShell } from '@mantine/core'
import AdminHeader from 'src/components/AdminHeader/AdminHeader'
import AdminNavbar from 'src/components/AdminNavbar/AdminNavbar'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <AppShell
      padding="md"
      navbar={<AdminNavbar width={{ base: 300 }} height={500} padding="xs" />}
      header={<AdminHeader height={70} padding="xs" />}
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
