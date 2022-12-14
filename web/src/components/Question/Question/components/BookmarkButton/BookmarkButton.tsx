import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { useState } from 'react'
import { Icon } from 'src/components/Icon'
import { Tooltip } from 'src/components/Tooltip'

interface IBookmarkButton {
  bookmarked: boolean
  questionId: number
}

const DELETE_BOOKMARK_QUESTION_MUTATION = gql`
  mutation deleteBookmarkQuestionMutation($questionId: Int!, $userId: Int!) {
    deleteQuestionBookmark(questionId: $questionId, userId: $userId) {
      id
    }
  }
`

const BOOKMARK_QUESTION_MUTATION = gql`
  mutation bookmarkQuestionMutation($questionId: Int!, $userId: Int!) {
    createBookmark(input: { userId: $userId, questionId: $questionId }) {
      id
    }
  }
`

const BookmarkButton = ({ bookmarked, questionId }: IBookmarkButton) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmarked)
  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  const { currentUser } = useAuth()

  // TODO: Add loading animation
  const [createBookmark] = useMutation(BOOKMARK_QUESTION_MUTATION, {
    onCompleted: () => {
      setIsBookmarked(true)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const [removeBookmark] = useMutation(DELETE_BOOKMARK_QUESTION_MUTATION, {
    onCompleted: () => {
      setIsBookmarked(false)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleAddBookmark = () => {
    createBookmark({
      variables: {
        userId: Number(currentUser.id),
        questionId: Number(questionId),
      },
    })
  }

  const handleRemoveBookmark = () => {
    removeBookmark({
      variables: {
        userId: Number(currentUser.id),
        questionId: Number(questionId),
      },
    })
  }

  const toggleTooltip = () => {
    setShowTooltip((prevValue) => !prevValue)
  }

  // if no one is logged in, don't display the button
  if (!currentUser) {
    return <span />
  }

  // if the user bookmarked this question
  if (isBookmarked)
    return (
      <button
        className="col-start-4 col-span-1 relative items-center flex justify-center hover:text-punch"
        data-testid="bookmarkButton"
        onClick={handleRemoveBookmark}
        onMouseEnter={toggleTooltip}
        onMouseLeave={toggleTooltip}
      >
        <span data-testid="bookmarkFilled">
          <Icon className="selected-action action" name="bookmarkFilled" />
        </span>
        <div className="absolute top-7 left-1/2 -translate-x-1/2">
          <Tooltip text="Bookmark" isShowing={showTooltip} />
        </div>
      </button>
    )

  // otherwise...
  return (
    <button
      className="col-start-4 col-span-1 relative flex items-center justify-center hover:text-punch"
      data-testid="bookmarkButton"
      onClick={handleAddBookmark}
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      <span data-testid="bookmarkEmpty">
        <Icon className="action" name="bookmark" />
      </span>
      <div className="absolute top-7 left-1/2 -translate-x-1/2">
        <Tooltip text="Bookmark" isShowing={showTooltip} />
      </div>
    </button>
  )
}

export { BookmarkButton }
