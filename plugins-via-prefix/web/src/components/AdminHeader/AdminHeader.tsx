import { HeaderProps, Header } from '@mantine/core'

const AdminHeader = (props: Omit<HeaderProps, 'children'>) => {
  return (
    <Header {...props}>
      <h1>RE Admin</h1>
    </Header>
  )
}

export default AdminHeader
