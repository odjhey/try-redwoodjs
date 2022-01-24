// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import PricesLayout from 'src/layouts/Admin/PricesLayout'
import UnitsLayout from 'src/layouts/Admin/UnitsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PricesLayout}>
        <Route path="/admin/prices/new" page={AdminPriceNewPricePage} name="adminNewPrice" />
        <Route path="/admin/prices/{id:Int}/edit" page={AdminPriceEditPricePage} name="adminEditPrice" />
        <Route path="/admin/prices/{id:Int}" page={AdminPricePricePage} name="adminPrice" />
        <Route path="/admin/prices" page={AdminPricePricesPage} name="adminPrices" />
      </Set>
      <Set wrap={UnitsLayout}>
        <Route path="/admin/units/new" page={AdminUnitNewUnitPage} name="adminNewUnit" />
        <Route path="/admin/units/{id:Int}/edit" page={AdminUnitEditUnitPage} name="adminEditUnit" />
        <Route path="/admin/units/{id:Int}" page={AdminUnitUnitPage} name="adminUnit" />
        <Route path="/admin/units" page={AdminUnitUnitsPage} name="adminUnits" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
