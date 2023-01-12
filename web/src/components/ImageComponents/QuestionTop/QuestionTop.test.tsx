import { render } from '@redwoodjs/testing/web'

import { QuestionTop } from './QuestionTop'

describe('QuestionTop', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuestionTop />)
    }).not.toThrow()
  })
})
