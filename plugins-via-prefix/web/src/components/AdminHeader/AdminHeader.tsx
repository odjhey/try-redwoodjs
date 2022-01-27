import { Link, routes } from '@redwoodjs/router'
import { HeaderProps, Header } from '@mantine/core'

const AdminHeader = (props: Omit<HeaderProps, 'children'>) => {
  return (
    <Header {...props}>
      <Link to={routes.admin()}>
        <h1>RE Admin</h1>
      </Link>
    </Header>
  )
}

export default AdminHeader
