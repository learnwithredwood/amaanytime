export const DELETE_QUESTION_MUTATION = gql`
  mutation DeleteQuestionMutation($id: Int!) {
    deleteQuestion(id: $id) {
      id
    }
  }
`

export const ANSWER_QUESTION_MUTATION = gql`
  mutation AnswerQuestionMutation(
    $questionId: Int!
    $input: UpdateQuestionInput!
  ) {
    updateQuestion(id: $questionId, input: $input) {
      id
    }
  }
`
