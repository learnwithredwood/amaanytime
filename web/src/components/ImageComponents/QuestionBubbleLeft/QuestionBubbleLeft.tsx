import Question from './QuestionBubbleLeft.svg'

const QuestionBubbleLeft = () => {
  return (
    <Question
      aria-labelledby="question-bubble"
      className="hidden lg:-left-[17rem] lg:-top-[5rem] lg:block"
      role="img"
    />
  )
}

export { QuestionBubbleLeft }
