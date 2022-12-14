import { render } from '@redwoodjs/testing/web'

import { PinnedQuestion as data } from '../../../Question.mocks'

import AnswerForm from './AnswerForm'

describe('AnswerForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnswerForm answeredBy={data.answeredBy} />)
    }).not.toThrow()
  })
})
