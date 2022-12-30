import Question from './SlantedQuestionMark.svg'

const SlantedQuestionMark = ({ className }) => {
  return (
    <Question
      aria-labelledby="question-mark"
      className={className}
      role="img"
    />
  )
}

export { SlantedQuestionMark }
