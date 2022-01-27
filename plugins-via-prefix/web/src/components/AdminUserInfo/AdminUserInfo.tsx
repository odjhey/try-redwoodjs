import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { Group, Button } from '@mantine/core'

const AdminUserInfo = () => {
  const { currentUser, loading, logOut } = useAuth()

  if (loading) {
    return <p>...</p>
  }

  if (currentUser) {
    return (
      <Group>
        <p>{currentUser?.id}</p>
        <Button variant="subtle" onClick={logOut}>
          logout
        </Button>
      </Group>
    )
  }

  return (
    <Group>
      <Button component={Link} to={routes.login()} variant="subtle">
        Signin
      </Button>
    </Group>
  )
}

export default AdminUserInfo
