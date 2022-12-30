import Question from './QuestionMarkBubble.svg'

const QuestionMarkBubble = ({ className }) => {
  return (
    <Question
      aria-labelledby="question-mark"
      className={className}
      role="img"
    />
  )
}

export { QuestionMarkBubble }
