import { render } from '@redwoodjs/testing/web'

import { SlantedQuestionMark } from './SlantedQuestionMark'

describe('SlantedQuestionMark', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SlantedQuestionMark className={undefined} />)
    }).not.toThrow()
  })
})
