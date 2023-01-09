import { render } from '@redwoodjs/testing/web'

import { BlueStar } from './BlueStar'

describe('BlueStar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlueStar />)
    }).not.toThrow()
  })
})
