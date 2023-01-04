import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'

import FeedBlock from 'src/components/FeedBlock/FeedBlock'

export const QUERY = gql`
  query FindQuestions {
    questions {
      id
      question
      answer
      order
      pinned
      askedOn
      updatedOn
      notGoingToAnswer
      flag
      archive
      parentQuestionId
      askedByUserId
      answeredByUserId
      askedBy {
        username
        name
        avatar
      }
    }
  }
`

const FeedPage = () => {
  const { isAuthenticated } = useAuth()
  const { data, loading } = useQuery(QUERY)

  if (loading) {
    return <p>loading...</p>
  }

  return (
    <>
      <MetaTags title="Feed" description="Feed page" />
      {isAuthenticated ? (
        <>
          <h2 className="sr-only">Feed</h2>

          <div>
            {data.questions?.map((question) => (
              <FeedBlock key={question.id} question={question} />
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
