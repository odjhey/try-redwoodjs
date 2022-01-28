// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import ImagesOnCoreAttachmentsLayout from 'src/layouts/Admin/ImagesOnCoreAttachmentsLayout'
import CoreAttachmentsLayout from 'src/layouts/Admin/CoreAttachmentsLayout'
import ImagesLayout from 'src/layouts/Admin/ImagesLayout'
import CoreUnitExtGeneralInfosLayout from 'src/layouts/Admin/CoreUnitExtGeneralInfosLayout'
import CoreUnitsLayout from 'src/layouts/Admin/CoreUnitsLayout'
import CoreProjectsLayout from 'src/layouts/Admin/CoreProjectsLayout'
import CoreDevelopmentsLayout from 'src/layouts/Admin/CoreDevelopmentsLayout'
import CoreOrganizationsLayout from 'src/layouts/Admin/CoreOrganizationsLayout'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={AdminLayout}>
        <Route path="/admin" page={AdminPage} name="admin" />
        <Set wrap={CoreUnitsLayout}>
          <Route path="/admin/core-units/new" page={AdminCoreUnitNewCoreUnitPage} name="adminNewCoreUnit" />
          <Route path="/admin/core-units/{id:Int}/edit" page={AdminCoreUnitEditCoreUnitPage} name="adminEditCoreUnit" />
          <Route path="/admin/core-units/{id:Int}" page={AdminCoreUnitCoreUnitPage} name="adminCoreUnit" />
          <Route path="/admin/core-units" page={AdminCoreUnitCoreUnitsPage} name="adminCoreUnits" />
        </Set>
        <Set wrap={CoreProjectsLayout}>
          <Route path="/admin/core-projects/new" page={AdminCoreProjectNewCoreProjectPage} name="adminNewCoreProject" />
          <Route path="/admin/core-projects/{id:Int}/edit" page={AdminCoreProjectEditCoreProjectPage} name="adminEditCoreProject" />
          <Route path="/admin/core-projects/{id:Int}" page={AdminCoreProjectCoreProjectPage} name="adminCoreProject" />
          <Route path="/admin/core-projects" page={AdminCoreProjectCoreProjectsPage} name="adminCoreProjects" />
        </Set>
        <Set wrap={CoreDevelopmentsLayout}>
          <Route path="/admin/core-developments/new" page={AdminCoreDevelopmentNewCoreDevelopmentPage} name="adminNewCoreDevelopment" />
          <Route path="/admin/core-developments/{id:Int}/edit" page={AdminCoreDevelopmentEditCoreDevelopmentPage} name="adminEditCoreDevelopment" />
          <Route path="/admin/core-developments/{id:Int}" page={AdminCoreDevelopmentCoreDevelopmentPage} name="adminCoreDevelopment" />
          <Route path="/admin/core-developments" page={AdminCoreDevelopmentCoreDevelopmentsPage} name="adminCoreDevelopments" />
        </Set>
        <Set wrap={CoreOrganizationsLayout}>
          <Route path="/admin/core-organizations/new" page={AdminCoreOrganizationNewCoreOrganizationPage} name="adminNewCoreOrganization" />
          <Route path="/admin/core-organizations/{id:Int}/edit" page={AdminCoreOrganizationEditCoreOrganizationPage} name="adminEditCoreOrganization" />
          <Route path="/admin/core-organizations/{id:Int}" page={AdminCoreOrganizationCoreOrganizationPage} name="adminCoreOrganization" />
          <Route path="/admin/core-organizations" page={AdminCoreOrganizationCoreOrganizationsPage} name="adminCoreOrganizations" />
        </Set>

        <Set wrap={CoreUnitExtGeneralInfosLayout}>
          <Route path="/admin/core-unit-ext-general-infos/new" page={AdminCoreUnitExtGeneralInfoNewCoreUnitExtGeneralInfoPage} name="adminNewCoreUnitExtGeneralInfo" />
          <Route path="/admin/core-unit-ext-general-infos/{id:Int}/edit" page={AdminCoreUnitExtGeneralInfoEditCoreUnitExtGeneralInfoPage} name="adminEditCoreUnitExtGeneralInfo" />
          <Route path="/admin/core-unit-ext-general-infos/{id:Int}" page={AdminCoreUnitExtGeneralInfoCoreUnitExtGeneralInfoPage} name="adminCoreUnitExtGeneralInfo" />
        </Set>

        <Set wrap={ImagesLayout}>
          <Route path="/admin/images/new" page={AdminImageNewImagePage} name="adminNewImage" />
          <Route path="/admin/images/{id:Int}/edit" page={AdminImageEditImagePage} name="adminEditImage" />
          <Route path="/admin/images/{id:Int}" page={AdminImageImagePage} name="adminImage" />
          <Route path="/admin/images" page={AdminImageImagesPage} name="adminImages" />
        </Set>
        <Set wrap={ImagesOnCoreAttachmentsLayout}>
          <Route path="/admin/images-on-core-attachments/new" page={AdminImagesOnCoreAttachmentNewImagesOnCoreAttachmentPage} name="adminNewImagesOnCoreAttachment" />
          <Route path="/admin/images-on-core-attachments/{id:Int}/edit" page={AdminImagesOnCoreAttachmentEditImagesOnCoreAttachmentPage} name="adminEditImagesOnCoreAttachment" />
          <Route path="/admin/images-on-core-attachments/{id:Int}" page={AdminImagesOnCoreAttachmentImagesOnCoreAttachmentPage} name="adminImagesOnCoreAttachment" />
          <Route path="/admin/images-on-core-attachments" page={AdminImagesOnCoreAttachmentImagesOnCoreAttachmentsPage} name="adminImagesOnCoreAttachments" />
        </Set>
        <Set wrap={CoreAttachmentsLayout}>
          <Route path="/admin/core-attachments/new" page={AdminCoreAttachmentNewCoreAttachmentPage} name="adminNewCoreAttachment" />
          <Route path="/admin/core-attachments/{id:Int}/edit" page={AdminCoreAttachmentEditCoreAttachmentPage} name="adminEditCoreAttachment" />
          <Route path="/admin/core-attachments/{id:Int}" page={AdminCoreAttachmentCoreAttachmentPage} name="adminCoreAttachment" />
          <Route path="/admin/core-attachments" page={AdminCoreAttachmentCoreAttachmentsPage} name="adminCoreAttachments" />
        </Set>

        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
