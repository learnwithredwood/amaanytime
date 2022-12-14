import { Form, Submit } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { Avatar } from 'src/components/Avatar'
import { AvatarColor } from 'src/components/Avatar/Avatar'
import { ButtonWithConfirmation } from 'src/components/ButtonWithConfirmation'
import { AmaTextarea } from 'src/components/Form/AmaTextarea'

interface IAnswerForm {
  afterDismissQuestion: () => void
  answeredBy: {
    avatarColor: AvatarColor
    avatar: string
    fullName: string
  }
  className: string
  onSave: (data) => void
  questionId: number
}

// mutations
const DISMISS_QUESTION_MUTATION = gql`
  mutation DismissQuestionMutation($id: Int!) {
    updateQuestion(id: $id, input: { notGoingToAnswer: true }) {
      id
      notGoingToAnswer
    }
  }
`

const AnswerForm = ({
  afterDismissQuestion,
  answeredBy,
  className,
  onSave,
  questionId,
}: IAnswerForm): JSX.Element => {
  const onSubmit = (data) => {
    onSave(data)
  }

  const [dismissQuestion] = useMutation(DISMISS_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('The question has been dismissed.')
      afterDismissQuestion()
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleDismissQuestion = () => {
    dismissQuestion({
      variables: {
        id: questionId,
      },
    })
  }

  return (
    <div className={`relative flex w-full gap-6 ${className}`}>
      <div className="w-[68px] text-center">
        <Avatar
          avatarColor={answeredBy.avatarColor}
          className="relative top-0 mx-auto"
          src={answeredBy.avatar}
          alt={answeredBy.fullName}
          height={48}
          width={48}
        />
      </div>
      <Form className="mb-6 flex-1" onSubmit={onSubmit}>
        <AmaTextarea
          label={''}
          name={'answer'}
          placeholder="Your answer..."
          rows={1}
        />
        <div className="relative -top-4 flex items-center justify-between">
          <Submit className="relative rounded-3xl border-2 border-black px-4 py-1 font-slab text-xs uppercase hover:border-punch hover:bg-punch hover:text-white">
            Answer Question
          </Submit>
          <ButtonWithConfirmation
            handleClick={handleDismissQuestion}
            label="Dismiss Question"
            size="small"
            style="underline"
            className="text-sonicSilver"
          />
        </div>
      </Form>
    </div>
  )
}

export default AnswerForm
