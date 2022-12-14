import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { RecentItem } from '../RecentItem'

export const QUERY = gql`
  query RecentItems($currentUserId: Int!, $skip: Int, $take: Int) {
    recentQuestions(currentUsersId: $currentUserId, skip: $skip, take: $take) {
      id
      question
      answeredBy {
        avatar
        avatarColor
        username
        fullName
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  recentQuestions,
  showNewRecentQuestions,
}: CellSuccessProps) => {
  //  FIXME: Showing all questions, should be limited to questions that have have been answered
  return (
    <div className="mb-24 flex flex-col gap-7">
      <h3 className="aside-heading">Recently</h3>
      {recentQuestions.map((question, index) => (
        <RecentItem
          key={index}
          fullName={question.answeredBy.fullName}
          question={question.question}
          questionId={question.id}
          username={question.answeredBy.username}
          avatar={question.answeredBy.avatar}
          avatarColor={question.answeredBy.avatarColor}
        />
      ))}
      <div>
        {/* TODO: DISABLE BUTTON WHEN I'VE LOADED IN ALL THE QUESTIONS */}
        <button className="text-button" onClick={showNewRecentQuestions}>
          Show More
        </button>
      </div>
    </div>
  )
}
