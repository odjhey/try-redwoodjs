import { render } from '@redwoodjs/testing/web'

import AdminUserInfo from './AdminUserInfo'

describe('AdminUserInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminUserInfo />)
    }).not.toThrow()
  })
})
