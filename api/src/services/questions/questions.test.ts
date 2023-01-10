import type { Question } from '@prisma/client'

import {
  questions,
  question,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from './questions'
import type { StandardScenario } from './questions.scenarios'

describe('questions', () => {
  scenario('returns all questions', async (scenario: StandardScenario) => {
    const result = await questions()

    expect(result.length).toEqual(Object.keys(scenario.question).length)
  })

  scenario('returns a single question', async (scenario: StandardScenario) => {
    const result = await question({ id: scenario.question.one.id })

    expect(result).toEqual(scenario.question.one)
  })

  scenario('creates a question', async (scenario: StandardScenario) => {
    const result = await createQuestion({
      input: {
        question: 'String',
        askedByUserId: scenario.question.two.askedByUserId,
        answeredByUserId: scenario.question.two.answeredByUserId,
      },
    })

    expect(result.question).toEqual('String')
    expect(result.askedByUserId).toEqual(scenario.question.two.askedByUserId)
    expect(result.answeredByUserId).toEqual(
      scenario.question.two.answeredByUserId
    )
  })

  scenario('updates a question', async (scenario: StandardScenario) => {
    const original = (await question({
      id: scenario.question.one.id,
    })) as Question
    const result = await updateQuestion({
      id: original.id,
      input: { question: 'String2' },
    })

    expect(result.question).toEqual('String2')
  })

  scenario('deletes a question', async (scenario: StandardScenario) => {
    const original = (await deleteQuestion({
      id: scenario.question.one.id,
    })) as Question
    const result = await question({ id: original.id })

    expect(result).toEqual(null)
  })
})
