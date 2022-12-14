import type { AvatarColor } from 'src/components/Avatar/Avatar'

export interface IUser {
  id: number
  fullName: string
  username: string
  avatar?: string
  avatarColor: AvatarColor
}

export interface IQuestion {
  answer?: string
  answeredBy: IUser
  askAgain?: number
  askedBy: IUser
  askedOn: string
  className?: string
  countLikes?: number
  currentUserBookmarked?: boolean
  currentUserLikes?: boolean
  favorite?: number
  followUp?: number
  pinned?: boolean
  question: string
  questionId: number
  questionOrder?: number
  showActions?: boolean
  updatedOn?: string
  rerouteOnDelete?: () => void
}
