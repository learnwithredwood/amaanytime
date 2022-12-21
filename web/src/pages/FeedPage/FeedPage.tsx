import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { Icon } from 'src/components/Icon'

const FeedPage = () => {
  const { isAuthenticated } = useAuth()

  const Links = () => {
    return (
      <ul className="inline-flex w-full justify-between">
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
      {/* TODO: Add Meta Data */}
      <MetaTags title="Feed" description="Feed page" />
      {isAuthenticated ? (
        <>
          <h2 className="sr-only">Feed</h2>

          <div>
            {questionsMock.map((question) => (
              <div
                key={question.id}
                className="text-gray-500 mt-0.5 flex  w-full space-x-4 border p-4 text-sm"
              >
                {/* Avatar */}
                <div className="flex-none py-10">
                  <img
                    src={question.avatarSrc}
                    alt=""
                    className="bg-gray-100 h-10 w-10 rounded-full"
                  />
                </div>

                <div className="flex-1 py-10">
                  {/* asked by, handle, date */}
                  <div className="flex gap-1 font-sans text-xs">
                    <h3 className="text-gray-900 font-bold">
                      {question.askedBy}
                    </h3>
                    <p>@{question.handle}</p>
                    <p>-</p>
                    <p>
                      <time dateTime={question.askedOn}>
                        {question.askedOn}
                      </time>
                    </p>
                  </div>
                  {/* question */}
                  <div className="mt-4 flex items-center">
                    <h3 className="font-condensed text-xl">
                      {question.question}
                    </h3>
                  </div>
                  {/* answer */}
                  <div
                    className="prose prose-sm text-gray-500 mt-4 max-w-none"
                    dangerouslySetInnerHTML={{ __html: question.content }}
                  />
                  {/* links */}
                  <Links />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Link to={routes.login()}>Login</Link>
      )}
    </>
  )
}

export default FeedPage

const questionsMock = [
  {
    id: 1,
    question: 'How do I get the icon pack to work in my project?',
    answer:
      'Check out the documentation for instructions on how to use the icon pack in your project.',
    order: 1,
    pinned: false,
    askedBy: 'John Doe',
    askedById: 1,
    answeredBy: 'Jane Doe',
    answeredById: 2,
    askedOn: '2021-07-16',
    updatedOn: '2021-07-16',
    handle: 'john-doe',
    parentQuestionId: 1,
    notGoingToAnswer: false,
    flag: false,
    archive: false,
    parentQuestion: null,
    questions: null,
    bookmarks: null,
    likes: null,
    askAgains: null,
    votes: null,
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    avatarSrc:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
    id: 2,
    question: 'How do I get the icon pack to work in my project?',
    answer:
      'Check out the documentation for instructions on how to use the icon pack in your project.',
    order: 2,
    pinned: false,
    askedBy: 'John Doe',
    askedById: 2,
    answeredBy: 'Jane Doe',
    answeredById: 3,
    askedOn: '2021-07-16',
    updatedOn: '2021-07-16',
    handle: 'john-doe',
    parentQuestionId: 2,
    notGoingToAnswer: false,
    flag: false,
    archive: false,
    parentQuestion: null,
    questions: null,
    bookmarks: null,
    likes: null,
    askAgains: null,
    votes: null,
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
]
