import Question from './QuestionTop.svg'

const QuestionTop = ({ className }) => {
  return (
    <Question
      aria-labelledby="question-mark"
      className={className}
      role="img"
    />
  )
}

export { QuestionTop }
