import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CoreUnitLayoutProps = {
  children: React.ReactNode
}

const CoreUnitsLayout = ({ children }: CoreUnitLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminCoreUnits()} className="rw-link">
            CoreUnits
          </Link>
        </h1>
        <Link
          to={routes.adminNewCoreUnit()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New CoreUnit
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CoreUnitsLayout
