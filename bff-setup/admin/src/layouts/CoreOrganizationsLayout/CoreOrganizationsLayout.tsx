import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CoreOrganizationLayoutProps = {
  children: React.ReactNode
}

const CoreOrganizationsLayout = ({ children }: CoreOrganizationLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.coreOrganizations()}
            className="rw-link"
          >
            CoreOrganizations
          </Link>
        </h1>
        <Link
          to={routes.newCoreOrganization()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New CoreOrganization
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CoreOrganizationsLayout
