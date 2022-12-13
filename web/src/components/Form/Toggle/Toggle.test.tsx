import { render } from '@redwoodjs/testing/web'

import { Toggle } from './Toggle'

describe('Toggle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Toggle />)
    }).not.toThrow()
  })
})
