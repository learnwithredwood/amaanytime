import { useAuth } from '@redwoodjs/auth'
import { Form, FormError, Submit, HiddenField } from '@redwoodjs/forms'
import { Avatar } from 'src/components/Avatar'
import { AmaTextarea } from 'src/components/Form/AmaTextarea'

// TODO: Write Tests

const QuestionForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    props.onSave(data, props?.question?.id)
  }

  return (
    <div>
      <Form onSubmit={onSubmit} error={props.error} className="mb-0">
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <div className="grid grid-cols-[72px_minmax(0,_1fr)] gap-x-6 gap-y-2">
          <div className="relative">
            <Avatar
              alt={props.answeredBy.fullName}
              avatarColor={props.answeredBy.avatarColor}
              className="mx-auto z-avatar relative"
              height={32}
              width={32}
            />
            <div className="absolute h-full w-0 border-l-2 border-black left-1/2 z-avatarConnector" />
          </div>
          <div className="items-center self-center">
            <p>
              Question for <strong>{props.answeredBy.fullName}</strong> @
              {props.answeredBy.username}
            </p>
          </div>
          <Avatar
            alt={currentUser.fullName}
            avatarColor={currentUser.avatarColor}
            className="z-avatar relative"
            height={72}
            width={72}
          />
          <div>
            <AmaTextarea
              name="question"
              defaultValue={props.question?.question}
              label=""
              required={true}
              validation={{ required: true }}
            />
          </div>
        </div>
        <HiddenField name="askedById" value={currentUser.id} />
        <HiddenField name="answeredById" value={props.answeredBy.id} />

        <div className="button-group">
          <Submit className="submit-btn" disabled={props.loading}>
            Ask Question
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default QuestionForm
