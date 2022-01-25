import { render } from '@redwoodjs/testing/web'

import UnitPage from './UnitPage'

describe('UnitPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UnitPage />)
    }).not.toThrow()
  })
})
