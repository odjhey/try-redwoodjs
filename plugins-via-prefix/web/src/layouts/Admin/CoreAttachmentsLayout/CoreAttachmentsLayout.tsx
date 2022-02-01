import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CoreAttachmentLayoutProps = {
  children: React.ReactNode
}

const CoreAttachmentsLayout = ({ children }: CoreAttachmentLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminCoreAttachments()} className="rw-link">
            CoreAttachments
          </Link>
        </h1>
        <Link
          to={routes.adminNewCoreAttachment()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New CoreAttachment
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CoreAttachmentsLayout
