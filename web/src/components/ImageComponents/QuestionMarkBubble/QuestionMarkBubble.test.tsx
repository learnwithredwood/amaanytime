import { render } from '@redwoodjs/testing/web'

import { QuestionMarkBubble } from './QuestionMarkBubble'

describe('QuestionMarkBubble', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuestionMarkBubble className={undefined} />)
    }).not.toThrow()
  })
})
