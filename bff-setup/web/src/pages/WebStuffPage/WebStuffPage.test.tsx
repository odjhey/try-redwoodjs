import { render } from '@redwoodjs/testing/web'

import WebStuffPage from './WebStuffPage'

describe('WebStuffPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WebStuffPage />)
    }).not.toThrow()
  })
})
