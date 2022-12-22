import { render } from '@redwoodjs/testing/web'

import { ZealLogoAlt } from './ZealLogoAlt'

describe('ZealLogo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ZealLogoAlt />)
    }).not.toThrow()
  })
})
