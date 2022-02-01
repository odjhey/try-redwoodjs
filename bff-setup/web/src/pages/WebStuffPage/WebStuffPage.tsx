import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WebStuffPage = () => {
  return (
    <>
      <MetaTags title="WebStuff" description="WebStuff page" />

      <h1>WebStuffPage</h1>
      <p>
        Find me in <code>./web/src/pages/WebStuffPage/WebStuffPage.tsx</code>
      </p>
      <p>
        My default route is named <code>webStuff</code>, link to me with `
        <Link to={routes.webStuff()}>WebStuff</Link>`
      </p>
    </>
  )
}

export default WebStuffPage
