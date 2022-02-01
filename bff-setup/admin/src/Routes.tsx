// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import CoreOrganizationsLayout from 'src/layouts/CoreOrganizationsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={CoreOrganizationsLayout}>
        <Route path="/core-organizations/new" page={CoreOrganizationNewCoreOrganizationPage} name="newCoreOrganization" />
        <Route path="/core-organizations/{id:Int}/edit" page={CoreOrganizationEditCoreOrganizationPage} name="editCoreOrganization" />
        <Route path="/core-organizations/{id:Int}" page={CoreOrganizationCoreOrganizationPage} name="coreOrganization" />
        <Route path="/core-organizations" page={CoreOrganizationCoreOrganizationsPage} name="coreOrganizations" />
      </Set>
      <Route path="/" page={AdminPage} name="admin" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
