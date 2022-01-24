import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type UnitLayoutProps = {
  children: React.ReactNode
}

const UnitsLayout = ({ children }: UnitLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminUnits()} className="rw-link">
            Units
          </Link>
        </h1>
        <Link to={routes.adminNewUnit()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Unit
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default UnitsLayout
