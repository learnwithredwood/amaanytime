import { render, screen, waitFor } from '@redwoodjs/testing/web'
import { formatRelativeDate } from 'src/utils/DateHelpers'

import { Question } from './Question'
import {
  PinnedQuestion,
  QuestionOrder,
  QuestionNoActions,
} from './Question.mocks'

describe('Question', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Question {...PinnedQuestion} />)
    }).not.toThrow()
  })
  it('is pinned', () => {
    render(<Question {...PinnedQuestion} />)
    expect(screen.getByTestId('pinnedQuestion')).toBeInTheDocument()
    expect(screen.queryByTestId('questionOrder')).not.toBeInTheDocument()
  })

  it('is not pinned', () => {
    render(<Question {...QuestionOrder} />)
    expect(screen.queryByTestId('pinnedQuestion')).not.toBeInTheDocument()
  })

  it('shows the question', () => {
    render(<Question {...QuestionNoActions} />)
    expect(screen.getByTestId('question')).toHaveTextContent(
      QuestionNoActions.question
    )
  })

  it('shows the answer', () => {
    render(<Question {...QuestionNoActions} />)
    expect(screen.getByTestId('answer')).toHaveTextContent(
      QuestionNoActions.answer
    )
  })

  it('shows the details from the person asking the question', () => {
    render(<Question {...QuestionNoActions} />)
    expect(screen.getByTestId('askedBy')).toHaveTextContent(
      `${QuestionNoActions.askedBy.fullName} @${
        QuestionNoActions.askedBy.username
      } • ${formatRelativeDate(QuestionNoActions.askedOn)}`
    )
  })

  it('shows the details from the person answering the question', () => {
    render(<Question {...QuestionNoActions} />)
    expect(screen.getByTestId('answer')).toHaveTextContent(
      `${QuestionNoActions.answeredBy.fullName} @${
        QuestionNoActions.answeredBy.username
      } • ${formatRelativeDate(QuestionNoActions.updatedOn)}`
    )
  })

  it('hides the action buttons', () => {
    render(<Question {...QuestionNoActions} />)
    expect(screen.queryByTestId('actionButtons')).not.toBeInTheDocument()
  })

  it.skip('shows the action buttons', () => {
    render(<Question {...QuestionOrder} />)
    expect(screen.getByTestId('actionButtons')).toBeInTheDocument()
  })

  it('hides the bookmark if the user is not logged in', () => {
    render(<Question {...QuestionOrder} />)
    expect(screen.queryByTestId('bookmarkButton')).not.toBeInTheDocument()
  })

  it.skip('shows follow-up question count', () => {
    render(<Question {...QuestionOrder} />)
    expect(screen.getByTestId('followUpQuestion')).toHaveTextContent(
      QuestionOrder.followUp.toString()
    )
  })

  it("hides the follow-up question if the user isn't logged in and it's less than 0", () => {
    render(<Question {...QuestionOrder} followUp={0} />)
    expect(screen.queryByTestId('followUpQuestion')).not.toBeInTheDocument()
  })

  it.skip("shows the follow-up question if it's more than 0", () => {
    render(<Question {...QuestionOrder} followUp={1} />)
    expect(screen.getByTestId('followUpQuestion')).toHaveTextContent(1)
  })

  it.skip('shows how many people have favorited', () => {
    render(<Question {...QuestionOrder} />)
    expect(screen.getByTestId('favoritedQuestion')).toHaveTextContent(
      QuestionOrder.favorite.toString()
    )
  })

  it.skip('can favorite the question', () => {})

  it.skip('can toggle the bookmark', () => {})

  it.skip('shows how many people have reused the question', () => {
    render(<Question {...QuestionOrder} />)
    expect(screen.queryByTestId('askAgain')).toHaveTextContent(
      QuestionOrder.askAgain.toString()
    )
  })

  it.skip('can share the question', () => {})
  it.skip("can not ask a follow-up question (user isn't logged in)", () => {})

  // ----------- user is logged in ------------- */
  describe('user is logged in', () => {
    beforeEach(() => {
      mockCurrentUser({
        username: 'selfteachme',
        fullName: 'Amy Dutton',
        id: 1,
        email: 'amy@amaanything.com',
        avatar: '',
        avatarColor: 'PUNCH',
      })
    })

    it.skip('shows the follow-up question as an option, even at 0', async () => {
      render(<Question {...QuestionOrder} followUp={0} />)
      await waitFor(() => {
        expect(screen.getByTestId('followUpQuestion')).toBeInTheDocument()
      })
    })

    it.skip('hides follow-up question count if less than 0 and the user is logged in', async () => {
      render(<Question {...QuestionOrder} followUp={0} />)
      await waitFor(() => {
        expect(screen.getByTestId('followUpQuestion')).toHaveTextContent('')
      })
    })

    it.skip('has bookmarked this question (if the user is logged in)', async () => {
      render(<Question {...QuestionOrder} />)
      await waitFor(() => {
        expect(screen.queryByTestId('bookmarkFilled')).toBeInTheDocument()
        expect(screen.queryByTestId('bookmarkEmpty')).not.toBeInTheDocument()
      })
    })

    it.skip('has not bookmarked this question', async () => {
      render(<Question {...QuestionOrder} bookmark={false} />)
      await waitFor(() => {
        expect(screen.getByTestId('bookmarkEmpty')).toBeInTheDocument()
        expect(screen.queryByTestId('bookmarkFilled')).not.toBeInTheDocument()
      })
    })

    it.skip('hides how many people have reused the question, if less than 1', async () => {
      render(<Question {...QuestionOrder} askAgain={0} />)
      await waitFor(() => {
        expect(screen.queryByTestId('askAgain')).not.toHaveTextContent('0')
      })
    })

    it.skip('can ask a follow-up question, even at 0', async () => {
      render(<Question {...QuestionOrder} favorite={0} />)
      await waitFor(() => {
        expect(screen.queryByTestId('favoritedQuestion')).not.toHaveTextContent(
          '0'
        )
      })
    })

    it.skip('can reuse the question', () => {})
  })
})
