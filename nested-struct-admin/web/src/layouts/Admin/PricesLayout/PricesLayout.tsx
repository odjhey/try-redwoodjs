import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type PriceLayoutProps = {
  children: React.ReactNode
}

const PricesLayout = ({ children }: PriceLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.adminPrices()}
            className="rw-link"
          >
            Prices
          </Link>
        </h1>
        <Link
          to={routes.adminNewPrice()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Price
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PricesLayout
