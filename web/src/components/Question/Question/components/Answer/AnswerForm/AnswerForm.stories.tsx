import AnswerForm from './AnswerForm'
import { PinnedQuestion as data } from '../../../Question.mocks'

export const generated = () => {
  return <AnswerForm answeredBy={data.answeredBy} />
}

export default { title: 'Components/AnswerForm' }
