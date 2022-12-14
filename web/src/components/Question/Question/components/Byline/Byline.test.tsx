import { render, screen } from '@redwoodjs/testing/web'

import { formatRelativeDate } from 'src/utils/DateHelpers'

import { PinnedQuestion as data } from '../../Question.mocks'

import { Byline } from './Byline'

describe('Byline', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Byline person={data.answeredBy} displayDate={data.updatedOn} />)
    }).not.toThrow()
  })

  it("shows the person's name", () => {
    render(<Byline person={data.answeredBy} displayDate={data.updatedOn} />)
    expect(screen.getByTestId('byline')).toHaveTextContent(
      data.answeredBy.fullName
    )
  })

  it("shows the person's username", () => {
    render(<Byline person={data.answeredBy} displayDate={data.updatedOn} />)
    expect(screen.getByTestId('byline')).toHaveTextContent(
      data.answeredBy.username
    )
  })

  it('shows the date', () => {
    render(<Byline person={data.answeredBy} displayDate={data.updatedOn} />)
    expect(screen.getByTestId('byline')).toHaveTextContent(
      formatRelativeDate(data.updatedOn)
    )
  })
})
