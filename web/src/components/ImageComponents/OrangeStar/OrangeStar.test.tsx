import { render } from '@redwoodjs/testing/web'

import { OrangeStar } from './OrangeStar'

describe('OrangeStar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrangeStar />)
    }).not.toThrow()
  })
})
