import { Link, routes } from '@redwoodjs/router'
import { motion } from 'framer-motion'
import { Avatar } from '../../Avatar'
import type { IQuestion } from './Question.d'
import { Icon } from '../../Icon'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'
import { Answer } from './components/Answer/Answer'
import { Byline } from './components/Byline'
import { useState } from 'react'
import { DropdownMenu } from 'src/components/DropdownMenu'
import { ShareButton } from './components/ShareButton'
import { BookmarkButton } from './components/BookmarkButton'
import AnswerForm from './components/Answer/AnswerForm/AnswerForm'
import { LikeButton } from './components/LikeButton/LikeButton'
import { IDropdownMenuOptions } from 'src/components/DropdownMenu/DropdownMenu'
import { AskAgainButton } from './components/AskAgainButton'
import { ANSWER_QUESTION_MUTATION, DELETE_QUESTION_MUTATION } from './Mutations'
import { FollowupButton } from './components/FollowupButton'
import { PinnedQuestion } from './components/PinnedQuestion/PinnedQuestion'

const Question = ({
  answer,
  answeredBy,
  askAgain,
  askedBy,
  askedOn,
  className = '',
  countLikes = 0,
  currentUserBookmarked = false,
  currentUserLikes,
  followUp,
  pinned = false,
  question,
  questionId,
  showActions = true,
  rerouteOnDelete,
  updatedOn,
}: IQuestion): JSX.Element => {
  const { currentUser } = useAuth()
  const [isQuestionOptionsShowing, setIsQuestionOptionsShow] = useState(false)
  const [isShowing, setIsShowing] = useState(true)
  const [answerToQuestion, setAnswerToQuestion] = useState<string>(answer)

  const [deleteQuestion] = useMutation(DELETE_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('Question deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const [answerQuestion] = useMutation(ANSWER_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('Question Answered')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete question ' + id + '?')) {
      deleteQuestion({ variables: { id } })
    }
  }

  const toggleQuestionOptions = () => {
    setIsQuestionOptionsShow((prevValue) => !prevValue)
  }

  const handleAnswerQuestion = (data) => {
    answerQuestion({
      variables: {
        questionId: Number(questionId),
        input: { answer: data.answer },
      },
    })

    // Update the display - hide the form and show the answer
    // Don't move the answer to the other tab as soon as the user submits
    setAnswerToQuestion(data.answer)
  }

  const fadeOutVariants = {
    showing: { opacity: 1, height: 'auto' },
    hidden: {
      opacity: [0.5, 0],
      // y: '-200px',
      height: ['auto', 0],
      transitionEnd: { display: 'none' },
    },
  }

  const afterDismissQuestion = () => {
    setIsShowing(false) // fade out question
  }

  const DisplayQuestionOptions = (): IDropdownMenuOptions[] => {
    // if this is a question I asked...
    if (currentUser.id === askedBy.id) {
      const options: IDropdownMenuOptions[] = [
        {
          label: 'Delete',
          icon: { name: 'delete' },
          action: () => onDeleteClick(questionId),
        },
      ]

      // if the question hasn't been answered yet, you can edit it
      if (!answerToQuestion) {
        options.unshift({
          label: 'Edit the Question',
          icon: { name: 'edit' },
          action: () => {},
        })
      }

      return [...options]
    }

    // if I was asked this question...
    if (currentUser.id === answeredBy.id) {
      const options: IDropdownMenuOptions[] = [
        {
          label: 'Hide',
          icon: { name: 'hide' },
          action: () => {},
        },
        {
          label: 'Report',
          icon: { name: 'flag' },
          action: () => {},
        },
      ]

      if (answerToQuestion) {
        options.push({
          label: 'Edit the Answer',
          icon: { name: 'edit' },
          action: () => {},
        })
      }

      return [...options]
    }

    // if I'm a nobody...
    return [
      {
        label: 'Report',
        icon: { name: 'flag' },
        action: () => {},
      },
    ]
  }

  const onFollowUpClick = () => {}

  return (
    <motion.div
      animate={isShowing ? 'showing' : 'hidden'}
      variants={fadeOutVariants}
    >
      <div
        className={`flex gap-5 pt-9 pl-14 pr-10 pb-9 relative border-b-2 border-black z-question ${className}`}
      >
        <div className="absolute right-10 top-7 z-optionsMenu">
          {isQuestionOptionsShowing && (
            <DropdownMenu
              isShowing={true}
              onClickOutside={() => toggleQuestionOptions()}
              options={DisplayQuestionOptions()}
              className="absolute -right-2 top-8 z-question"
              direction="top right"
              // triggerRef={triggerRef}
            />
          )}
          <button onClick={() => toggleQuestionOptions()}>
            <Icon name="dots" />
          </button>
        </div>
        <Avatar
          avatarColor={askedBy?.avatarColor}
          className="z-avatar relative"
          src={askedBy.avatar}
          alt={askedBy.username}
          height={68}
          width={68}
        />
        <div className="flex-1 relative">
          {pinned && <PinnedQuestion />}
          <div data-testid="askedBy" className="z-byline">
            <Byline person={askedBy} displayDate={askedOn} />
          </div>
          <div
            className="font-condensed text-[2.5rem] leading-none pt-o pb-8 relative"
            data-testid="question"
          >
            {/* connect question and answer / answer form */}
            {(answer || (!answer && answeredBy.id === currentUser.id)) && (
              <div className="h-full w-0 border-l-2 border-black block absolute -left-14 z-avatarConnector" />
            )}
            <Link
              to={routes.question({ id: String(questionId) })}
              className="hover:text-punch"
            >
              {question}
            </Link>
          </div>

          {!answerToQuestion && answeredBy.id === currentUser.id && (
            <AnswerForm
              afterDismissQuestion={afterDismissQuestion}
              answeredBy={currentUser}
              className="-ml-[5.5rem]"
              onSave={handleAnswerQuestion}
              questionId={questionId}
            />
          )}

          {/* display the answer */}
          {answerToQuestion && (
            <Answer
              answer={answerToQuestion}
              answeredBy={answeredBy}
              updatedOn={updatedOn}
            />
          )}

          {/* action buttons */}
          {showActions && (
            <div
              className="grid grid-cols-5 w-full"
              data-testid="actionButtons"
            >
              {/* Follow-Up */}
              {(currentUser || followUp > 0) && (
                <FollowupButton
                  followUp={followUp}
                  onFollowUpClick={onFollowUpClick}
                />
              )}

              {/* Like / Favorite */}
              {(currentUser || countLikes > 0) && (
                <LikeButton
                  favorite={currentUserLikes}
                  numberOfFavorites={countLikes}
                  questionId={questionId}
                />
              )}

              {/* Ask Again? */}
              {(currentUser || askAgain > 0) && (
                <AskAgainButton
                  userAskedAgain={false}
                  askAgainCount={askAgain}
                />
              )}

              {/* Bookmarked */}
              {currentUser && (
                <BookmarkButton
                  bookmarked={currentUserBookmarked}
                  questionId={questionId}
                />
              )}

              {/* Share */}
              <ShareButton />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export { Question }
