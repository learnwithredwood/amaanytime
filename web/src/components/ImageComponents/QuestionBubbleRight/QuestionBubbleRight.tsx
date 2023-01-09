import Question from './QuestionBubbleRight.svg'

const QuestionBubbleRight = ({ className }) => {
  return (
    <Question
      aria-labelledby="question-buble"
      className={className}
      role="img"
    />
  )
}

export { QuestionBubbleRight }
