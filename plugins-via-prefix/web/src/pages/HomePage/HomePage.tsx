import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <p>
        <Link to={routes.admin()}>Go to Admin</Link>
      </p>

      <h1>HomePage</h1>
      <p>Yada yada</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, vitae!
        Expedita non architecto veritatis, corporis quod quisquam modi aperiam
        aliquid odit suscipit harum dolorum, similique accusamus. Reiciendis
        temporibus consectetur ullam.
      </p>
    </>
  )
}

export default HomePage
