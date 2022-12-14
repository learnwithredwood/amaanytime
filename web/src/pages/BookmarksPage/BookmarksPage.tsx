import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { PageHeading } from 'src/components/PageHeading/PageHeading'
import BookmarksCell from '../../components/BookmarksCell/BookmarksCell'

const BookmarksPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Bookmarks" description="Bookmarks page" />
      <PageHeading title="My Bookmarks" isActionsShowing={true} />
      <div className="border-t-2 border-black z-question relative w-full h-0" />
      <BookmarksCell userId={currentUser.id} />
    </>
  )
}

export default BookmarksPage
