import Question from './QuestionBubbleLeft.svg'

const QuestionBubbleLeft = () => {
  return (
    <Question
      aria-labelledby="question-bubble"
      className="absolute hidden lg:left-1 lg:top-36 lg:block"
      role="img"
    />
  )
}

export { QuestionBubbleLeft }
