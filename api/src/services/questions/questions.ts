import type {
  QueryResolvers,
  MutationResolvers,
  QuestionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const questions: QueryResolvers['questions'] = () => {
  return db.question.findMany()
}

export const question: QueryResolvers['question'] = ({ id }) => {
  return db.question.findUnique({
    where: { id },
  })
}

export const createQuestion: MutationResolvers['createQuestion'] = ({
  input,
}) => {
  return db.question.create({
    data: input,
  })
}

export const updateQuestion: MutationResolvers['updateQuestion'] = ({
  id,
  input,
}) => {
  return db.question.update({
    data: input,
    where: { id },
  })
}

export const deleteQuestion: MutationResolvers['deleteQuestion'] = ({ id }) => {
  return db.question.delete({
    where: { id },
  })
}

export const Question: QuestionRelationResolvers = {
  askAgains: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).askAgains()
  },
  bookmarks: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).bookmarks()
  },
  likes: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).likes()
  },
  votes: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).votes()
  },
  parentQuestion: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).parentQuestion()
  },
  questions: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).questions()
  },
  askedBy: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).askedBy()
  },
  answeredBy: (_obj, { root }) => {
    return db.question.findUnique({ where: { id: root?.id } }).answeredBy()
  },
  feedAll: (_obj) => {
    return db.question.findMany({
      include: {
        askedBy: true,
        answeredBy: true,
      },
    })
  },
}
