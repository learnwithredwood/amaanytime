import Question from './QuestionTop.svg'

const QuestionTop = () => {
  return (
    <Question
      aria-labelledby="question-mark"
      className="absolute -top-[12rem] left-[10rem]"
      role="img"
    />
  )
}

export { QuestionTop }
