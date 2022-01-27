import { render } from '@redwoodjs/testing/web'

import AdminLinkList from './AdminLinkList'

describe('AdminLinkList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminLinkList />)
    }).not.toThrow()
  })
})
