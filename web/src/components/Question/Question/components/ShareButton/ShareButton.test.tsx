import { render } from '@redwoodjs/testing/web'

import { ShareButton } from './ShareButton'

describe('ShareButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShareButton />)
    }).not.toThrow()
  })
})
