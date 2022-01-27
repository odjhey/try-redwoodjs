import { render } from '@redwoodjs/testing/web'

import PortalUnit from './PortalUnit'

describe('PortalUnit', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PortalUnit />)
    }).not.toThrow()
  })
})
