import QuestionCell from 'src/components/Question/QuestionCell'

type QuestionPageProps = {
  id: number
}

const QuestionPage = ({ id }: QuestionPageProps) => {
  return <QuestionCell id={id} />
}

export default QuestionPage
