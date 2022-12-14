import { PinnedQuestion as data } from '../../../Question.mocks'

import AnswerForm from './AnswerForm'

export const generated = () => {
  return <AnswerForm answeredBy={data.answeredBy} />
}

export default { title: 'Components/AnswerForm' }
