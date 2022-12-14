import type { IQuestion } from './Question'

// TODO: Show that the question has been updated
// Once the question has been answered, shouldn't be able to update it
// Style threaded questions

export const PinnedQuestion: IQuestion = {
  questionId: '1',
  answer: 'This is the answer',
  askAgain: 3,
  askedBy: {
    fullName: 'Lily Smith',
    username: 'lilysmith',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    avatarColor: 'PUNCH',
  },
  answeredBy: {
    fullName: 'Amy Dutton',
    username: 'amydutton',
    avatarColor: 'PESTO',
  },
  askedOn: '2022-05-12T20:17:46.384Z',
  bookmark: true,
  favorite: 100,
  followUp: 25,
  pinned: true,
  question: 'Whats the question?',
  updatedOn: '2022-05-12T22:17:46.384Z',
}

export const QuestionOrder: IQuestion = {
  questionId: '2',
  answer: 'This is the answer',
  askAgain: 3,
  askedBy: {
    fullName: 'Lily Smith',
    username: 'lilysmith',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    avatarColor: 'PUNCH',
  },
  answeredBy: {
    fullName: 'Amy Dutton',
    username: 'amydutton',
    avatarColor: 'PESTO',
  },
  askedOn: '2022-05-12T20:17:46.384Z',
  bookmark: true,
  favorite: 100,
  followUp: 25,
  question: 'Whats the question?',
  questionOrder: 2,
  updatedOn: '2022-05-12T22:17:46.384Z',
}

export const QuestionNoActions: IQuestion = {
  questionId: '3',
  answer: 'This is the answer',
  askedBy: {
    fullName: 'Lily Smith',
    username: 'lilysmith',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    avatarColor: 'PUNCH',
  },
  answeredBy: {
    fullName: 'Amy Dutton',
    username: 'amydutton',
    avatarColor: 'PESTO',
  },
  askedOn: '2022-05-12T20:17:46.384Z',
  question: 'Whats the question?',
  showActions: false,
  updatedOn: '2022-05-12T22:17:46.384Z',
}
