import { Icon } from 'src/components/Icon'
import { formatRelativeDate } from 'src/utils/DateHelpers'

interface FeedBlockProps {
  question: {
    id: number
    answer?: string | null
    archive: boolean
    askedBy: {
      name: string
      username: string
      avatar: string
    }
    askedByUserId: string
    askedOn: string
    flag: boolean
    handle: string
    notGoingToAnswer: boolean
    order?: string | null
    pinned: boolean
    question: string
    updatedOn: string
  }
}

const FeedBlock = ({ question }: FeedBlockProps) => {
  const askedByName = question?.askedBy?.name
  const askedByUsername = question?.askedBy?.username
  const askedByAvatar = question?.askedBy?.avatar

  const Links = () => {
    return (
      <ul className="inline-flex w-full justify-between pt-6">
        <li>
          <Icon name="comment" height="12px" />
        </li>
        <li>
          <Icon name="heart" height="12px" />
        </li>
        <li>
          <Icon name="bookmark" height="12px" />
        </li>
        <li>
          <Icon name="reuse" height="12px" />
        </li>
        <li>
          <Icon name="share" height="12px" />
        </li>
      </ul>
    )
  }

  return (
    <>
      <div
        key={question.id}
        className="text-gray-500 mt-0.5 flex w-96 space-x-4 border px-4 align-top text-sm"
        // className="box-border absolute w-3/4"
      >
        {/* Avatar */}
        <div className="flex-none py-10">
          <img
            src={askedByAvatar}
            alt=""
            className="bg-gray-100 h-10 w-10 rounded-full"
          />
        </div>

        <div className="flex-1 py-10">
          {/* asked by, handle, date */}
          <div className="flex gap-1 font-sans text-xs">
            <h3 className="text-gray-900 font-bold">{askedByName}</h3>
            <p>@{askedByUsername}</p>
            <p>-</p>
            <p>
              <time dateTime={question.askedOn}>
                {formatRelativeDate(question.askedOn)}
              </time>
            </p>
          </div>
          {/* question */}
          <div className="mt-4 flex items-center">
            <h3 className="font-condensed text-xl">{question.question}</h3>
          </div>
          {/* answer */}
          <div className="prose prose-sm text-gray-500 mt-4 max-w-none">
            {question.answer}
          </div>
          {/* links */}
          <Links />
        </div>
      </div>
    </>
  )
}

export default FeedBlock
