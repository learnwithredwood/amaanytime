import { render } from '@redwoodjs/testing/web'

import { QuestionBubbleRight } from './QuestionBubbleRight'

describe('QuestionBubbleRight', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuestionBubbleRight />)
    }).not.toThrow()
  })
})
