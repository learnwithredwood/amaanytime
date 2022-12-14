import { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { Icon } from 'src/components/Icon'
import { Tooltip } from 'src/components/Tooltip'

// mutations
export const LIKE_QUESTION_MUTATION = gql`
  mutation LikeQuestionMutation($questionId: Int!, $userId: Int!) {
    createLike(input: { questionId: $questionId, userId: $userId }) {
      id
    }
  }
`

export const REMOVE_LIKE_QUESTION_MUTATION = gql`
  mutation RemoveLikeQuestionMutation($questionId: Int!, $userId: Int!) {
    deleteQuestionLike(questionId: $questionId, userId: $userId) {
      id
    }
  }
`

// types
interface ILikeButton {
  favorite: boolean
  numberOfFavorites: number
  questionId: number
}

const LikeButton = ({
  favorite = false,
  numberOfFavorites = 0,
  questionId,
}: ILikeButton): JSX.Element => {
  const { currentUser } = useAuth()
  const [isFavorite, setIsFavorite] = useState<boolean>(favorite)
  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  const [countFavorites, setCountFavorites] =
    useState<number>(numberOfFavorites)

  // set up mutations
  const [likeQuestion] = useMutation(LIKE_QUESTION_MUTATION, {
    onCompleted: () => {
      setIsFavorite(true) // update the state
      setCountFavorites((prevValue) => prevValue + 1)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const [removeLikeQuestion] = useMutation(REMOVE_LIKE_QUESTION_MUTATION, {
    onCompleted: () => {
      setIsFavorite(false) // update the state
      setCountFavorites((prevValue) => prevValue - 1)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onFavoriteClick = () => {
    likeQuestion({
      variables: {
        userId: Number(currentUser.id),
        questionId: Number(questionId),
      },
    })
  }

  const onRemoveFavoriteClick = () => {
    removeLikeQuestion({
      variables: {
        questionId: Number(questionId),
        userId: Number(currentUser.id),
      },
    })
  }

  const toggleTooltip = () => {
    setShowTooltip((prevValue) => !prevValue)
  }

  if (currentUser || numberOfFavorites > 0) {
    // if this is a favorite
    if (isFavorite)
      return (
        <button
          className={`action selected-action relative col-span-1 col-start-2 flex justify-center ${
            currentUser && `hover:text-punch`
          }`}
          data-testid="removeFavoritedQuestion"
          onClick={onRemoveFavoriteClick}
          disabled={!currentUser}
          onMouseEnter={toggleTooltip}
          onMouseLeave={toggleTooltip}
        >
          <Icon name="heartFilled" /> {countFavorites > 0 && countFavorites}
          <div className="absolute top-6 left-1/2 -translate-x-1/2">
            <Tooltip text="Like" isShowing={showTooltip} />
          </div>
        </button>
      )

    // otherwise, it's not a favorite
    return (
      <button
        className={`action relative col-span-1 col-start-2 flex justify-center ${
          currentUser && `hover:text-punch`
        }`}
        data-testid="favoritedQuestion"
        onClick={onFavoriteClick}
        disabled={!currentUser}
        onMouseEnter={toggleTooltip}
        onMouseLeave={toggleTooltip}
      >
        <Icon name="heart" /> {countFavorites > 0 && countFavorites}
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <Tooltip text="Like" isShowing={showTooltip} />
        </div>
      </button>
    )
  }

  return <span />
}

export { LikeButton }
