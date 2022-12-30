import Question from './QuestionBubbleLeft.svg'

const QuestionBubbleLeft = ({ className }) => {
  return (
    <Question
      aria-labelledby="question-bubble"
      className={className}
      role="img"
    />
  )
}

export { QuestionBubbleLeft }
