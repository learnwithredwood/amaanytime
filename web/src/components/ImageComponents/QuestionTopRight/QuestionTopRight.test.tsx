import { render } from '@redwoodjs/testing/web'

import { QuestionTopRight } from './QuestionTopRight'

describe('QuestionTopRight', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuestionTopRight />)
    }).not.toThrow()
  })
})
