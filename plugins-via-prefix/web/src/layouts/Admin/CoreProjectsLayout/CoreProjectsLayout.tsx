import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CoreProjectLayoutProps = {
  children: React.ReactNode
}

const CoreProjectsLayout = ({ children }: CoreProjectLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminCoreProjects()} className="rw-link">
            CoreProjects
          </Link>
        </h1>
        <Link
          to={routes.adminNewCoreProject()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New CoreProject
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CoreProjectsLayout
