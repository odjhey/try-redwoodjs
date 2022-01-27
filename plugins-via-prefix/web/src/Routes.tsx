// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import CoreOrganizationsLayout from 'src/layouts/Admin/CoreOrganizationsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={CoreOrganizationsLayout}>
        <Route path="/admin/core-organizations/new" page={AdminCoreOrganizationNewCoreOrganizationPage} name="adminNewCoreOrganization" />
        <Route path="/admin/core-organizations/{id:Int}/edit" page={AdminCoreOrganizationEditCoreOrganizationPage} name="adminEditCoreOrganization" />
        <Route path="/admin/core-organizations/{id:Int}" page={AdminCoreOrganizationCoreOrganizationPage} name="adminCoreOrganization" />
        <Route path="/admin/core-organizations" page={AdminCoreOrganizationCoreOrganizationsPage} name="adminCoreOrganizations" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
