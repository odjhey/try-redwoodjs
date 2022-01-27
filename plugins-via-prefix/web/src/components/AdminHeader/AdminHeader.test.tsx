import { render } from '@redwoodjs/testing/web'

import AdminHeader from './AdminHeader'

describe('AdminHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminHeader height={70} padding="xs" />)
    }).not.toThrow()
  })
})
