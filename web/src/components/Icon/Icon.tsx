import { Bookmark } from './Bookmark'
import { BookmarkFilled } from './BookmarkFilled'
import { Comment } from './Comment'
import { CommentFilled } from './CommentFilled'
import { Heart } from './Heart'
import { HeartFilled } from './HeartFilled'
import { Reuse } from './Reuse'
import { Share } from './Share'

export interface IIcon {
  name:
    | 'bookmark'
    | 'bookmarkFilled'
    | 'comment'
    | 'commentFilled'
    | 'heart'
    | 'heartFilled'
    | 'reuse'
    | 'share'

  className?: string
  width?: string
  height?: string
}

const Icon = ({ name, className = '', width, height }: IIcon): JSX.Element => {
  switch (name.toLowerCase()) {
    case 'bookmark':
      return <Bookmark className={className} width={width} height={height} />
    case 'bookmarkfilled':
      return (
        <BookmarkFilled className={className} width={width} height={height} />
      )
    case 'comment':
      return <Comment className={className} width={width} height={height} />
    case 'commentfilled':
      return (
        <CommentFilled className={className} width={width} height={height} />
      )
    case 'heart':
      return <Heart className={className} width={width} height={height} />
    case 'heartfilled':
      return <HeartFilled className={className} width={width} height={height} />
    case 'reuse':
      return <Reuse className={className} width={width} height={height} />
    case 'share':
      return <Share className={className} width={width} height={height} />
    default:
      return <div />
  }
}

export { Icon }
