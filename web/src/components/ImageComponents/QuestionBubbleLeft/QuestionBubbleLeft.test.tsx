import { render } from '@redwoodjs/testing/web'

import { QuestionBubbleLeft } from './QuestionBubbleLeft'

describe('QuestionBubbleLeft', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuestionBubbleLeft />)
    }).not.toThrow()
  })
})
