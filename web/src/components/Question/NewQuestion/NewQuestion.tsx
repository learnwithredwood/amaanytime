import { useMutation } from '@redwoodjs/web'
import QuestionForm from 'src/components/Question/QuestionForm'
import { toast } from '@redwoodjs/web/toast'
import { QUERY } from '../QuestionsCell/QuestionsCell'
import { IUser } from '../Question/Question.d'

// TODO: Write Tests

const CREATE_QUESTION_MUTATION = gql`
  mutation CreateQuestionMutation($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      id
    }
  }
`

interface INewQuestion {
  afterCreate: () => void
  answeredBy: IUser
}

const NewQuestion = ({ afterCreate, answeredBy }: INewQuestion) => {
  const [createQuestion, { loading, error }] = useMutation(
    CREATE_QUESTION_MUTATION,
    {
      refetchQueries: () => [
        { query: QUERY }, // DocumentNode object parsed with gql
        'FindQuestions', // Query name
      ],
      onCompleted: () => {
        afterCreate() // close the modal window
        toast('User created!') // display a success message in toast
      },
      onError: (error) => {
        toast.error(error.message) // display an error message in toast
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      askedById: parseInt(input.askedById),
      answeredById: parseInt(input.answeredById),
      parentQuestionId: parseInt(input.parentQuestionId),
    })
    createQuestion({ variables: { input: castInput } })
  }

  return (
    <div>
      <QuestionForm
        answeredBy={answeredBy}
        onSave={onSave}
        loading={loading}
        error={error}
      />
    </div>
  )
}

export { NewQuestion }
