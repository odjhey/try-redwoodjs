import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CoreUnitExtGeneralInfoLayoutProps = {
  children: React.ReactNode
}

const CoreUnitExtGeneralInfosLayout = ({
  children,
}: CoreUnitExtGeneralInfoLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          CoreUnitExtGeneralInfos
        </h1>
        <Link
          to={routes.adminNewCoreUnitExtGeneralInfo()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New CoreUnitExtGeneralInfo
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CoreUnitExtGeneralInfosLayout
