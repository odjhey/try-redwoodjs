import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminPage = () => {
  return (
    <>
      <MetaTags title="Admin" description="Admin page" />

      <h1>AdminPage</h1>
      <p>
        Find me in <code>./admin/src/pages/AdminPage/AdminPage.tsx</code>
      </p>
      <p>
        My default route is named <code>admin</code>, link to me with `
        <Link to={routes.admin()}>Admin</Link>`
      </p>
    </>
  )
}

export default AdminPage
