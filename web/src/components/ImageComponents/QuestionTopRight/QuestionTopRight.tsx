import Question from './QuestionTopRight.svg'

const QuestionTopRight = () => {
  return (
    <Question
      aria-labelledby="question-mark"
      className="absolute right-8 top-56 h-16 w-24 md:top-80 md:left-96 md:h-28 md:w-40 lg:sticky lg:top-8 lg:left-625 lg:h-40 lg:w-56"
      role="img"
    />
  )
}

export { QuestionTopRight }
