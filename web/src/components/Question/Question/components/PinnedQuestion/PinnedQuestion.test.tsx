import { render } from '@redwoodjs/testing/web'

import { PinnedQuestion } from './PinnedQuestion'

describe('PinnedQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PinnedQuestion />)
    }).not.toThrow()
  })
})
