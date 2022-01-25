import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const UnitPage = () => {
  return (
    <>
      <MetaTags title="Unit" description="Unit page" />

      <h1>UnitPage</h1>
      <p>
        Find me in <code>./web/src/pages/UnitPage/UnitPage.tsx</code>
      </p>
      <p>
        My default route is named <code>unit</code>, link to me with `
        <Link to={routes.unit()}>Unit</Link>`
      </p>
    </>
  )
}

export default UnitPage
