import { MetaTags } from '@redwoodjs/web'
import PortalUnitsCell from 'src/components/PortalUnitsCell'

const HomePage = ({ limit = 5, start = 0 }) => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <PortalUnitsCell limit={limit} start={start}></PortalUnitsCell>
    </>
  )
}

export default HomePage
