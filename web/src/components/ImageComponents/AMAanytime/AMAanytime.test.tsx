import { render } from '@redwoodjs/testing/web'

import { AMAanytime } from './AMAanytime'

describe('AMAanytime', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AMAanytime />)
    }).not.toThrow()
  })
})
