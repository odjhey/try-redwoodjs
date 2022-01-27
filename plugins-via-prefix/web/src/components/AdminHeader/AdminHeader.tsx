import { Link, routes } from '@redwoodjs/router'
import { HeaderProps, Header, Grid } from '@mantine/core'
import AdminUserInfo from '../AdminUserInfo/AdminUserInfo'

const AdminHeader = (props: Omit<HeaderProps, 'children'>) => {
  return (
    <Header {...props}>
      <Grid justify="space-between" align="center">
        <Grid.Col span={4}>
          <Link to={routes.admin()}>
            <h1>RE Admin</h1>
          </Link>
        </Grid.Col>
        <Grid.Col span={4}>
          <AdminUserInfo />
        </Grid.Col>
      </Grid>
    </Header>
  )
}

export default AdminHeader
