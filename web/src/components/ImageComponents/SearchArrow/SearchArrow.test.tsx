import { render } from '@redwoodjs/testing/web'

import { SearchArrow } from './SearchArrow'

describe('SearchArrow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchArrow />)
    }).not.toThrow()
  })
})
