import { render } from '@redwoodjs/testing/web'

import AdminNavbar from './AdminNavbar'

describe('AdminNavbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminNavbar />)
    }).not.toThrow()
  })
})
