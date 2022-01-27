import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PortalUnitsCell from 'src/components/PortalUnitsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <p>
        <Link to={routes.admin()}>Go to Admin</Link>
      </p>

      <h1>HomePage</h1>
      <PortalUnitsCell></PortalUnitsCell>
    </>
  )
}

export default HomePage
