import { render, screen } from '@redwoodjs/testing/web'

import { Answer } from './Answer'
import { PinnedQuestion as data } from '../../../Question.mocks'

describe('Answer', () => {
  beforeEach(() => {
    render(
      <Answer
        answer={data.answer}
        answeredBy={data.answeredBy}
        updatedOn={data.updatedOn}
      />
    )
  })

  it('renders successfully', () => {
    expect(() => {
      render(
        <Answer
          answer={data.answer}
          answeredBy={data.answeredBy}
          updatedOn={data.updatedOn}
        />
      )
    }).not.toThrow()
  })

  it('shows the answer', () => {
    expect(screen.getByTestId('answer')).toHaveTextContent(data.answer)
  })
})
