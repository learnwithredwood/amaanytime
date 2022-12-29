import Question from './QuestionTop.svg'

const QuestionTop = () => {
  return (
    <Question
      aria-labelledby="question-mark"
      className="top-18 md:left-22 absolute left-9 h-16 w-8 md:top-36 md:h-24 md:w-12 lg:top-8 lg:left-96 lg:h-16 lg:w-8"
      role="img"
    />
  )
}

export { QuestionTop }
