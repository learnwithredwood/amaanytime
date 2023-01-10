import Question from './SlantedQuestionMark.svg'

const SlantedQuestionMark = ({ width = 50 }: { width?: number }) => {
  return <Question width={width} aria-labelledby="question-mark" role="img" />
}

export { SlantedQuestionMark }
