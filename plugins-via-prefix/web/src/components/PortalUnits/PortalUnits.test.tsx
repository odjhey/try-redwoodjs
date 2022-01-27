import { render } from '@redwoodjs/testing/web'

import PortalUnits from './PortalUnits'

describe('PortalUnits', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PortalUnits />)
    }).not.toThrow()
  })
})
