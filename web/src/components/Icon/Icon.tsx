import { Arrow } from './Arrow'
import { Bell } from './Bell'
import { Block } from './Block'
import { Bookmark } from './Bookmark'
import { BookmarkFilled } from './BookmarkFilled'
import { Check } from './Check'
import { ChevronDown } from './ChevronDown'
import { ChevronLeft } from './ChevronLeft'
import { ChevronRight } from './ChevronRight'
import { ChevronUp } from './ChevronUp'
import { Close } from './Close'
import { Comment } from './Comment'
import { CommentFilled } from './CommentFilled'
import { Delete } from './Delete'
import { Dots } from './Dots'
import { Edit } from './Edit'
import { Flag } from './Flag'
import { Follow } from './Follow'
import { Heart } from './Heart'
import { HeartFilled } from './HeartFilled'
import { Hide } from './Hide'
import { Link } from './Link'
import { Logout } from './Logout'
import { Map } from './Map'
import { Mute } from './Mute'
import { Pin } from './Pin'
import { Reuse } from './Reuse'
import { Settings } from './Settings'
import { Share } from './Share'
import { Show } from './Show'
import { Unfollow } from './Unfollow'
import { Unmute } from './Unmute'
import { VoteDown } from './VoteDown'
import { VoteUp } from './VoteUp'

export interface IIcon {
  name:
    | 'arrow'
    | 'bell'
    | 'block'
    | 'bookmark'
    | 'bookmarkFilled'
    | 'check'
    | 'chevronDown'
    | 'chevronLeft'
    | 'chevronRight'
    | 'chevronUp'
    | 'close'
    | 'comment'
    | 'commentFilled'
    | 'delete'
    | 'dots'
    | 'edit'
    | 'flag'
    | 'follow'
    | 'hide'
    | 'heart'
    | 'heartFilled'
    | 'link'
    | 'logout'
    | 'map'
    | 'mute'
    | 'pin'
    | 'reuse'
    | 'settings'
    | 'share'
    | 'show'
    | 'unfollow'
    | 'unmute'
    | 'voteDown'
    | 'voteUp'
  className?: string
  width?: string
  height?: string
}

const Icon = ({ name, className = '', width, height }: IIcon): JSX.Element => {
  switch (name.toLowerCase()) {
    case 'arrow':
      return <Arrow className={className} width={width} height={height} />
    case 'bell':
      return <Bell className={className} width={width} height={height} />
    case 'block':
      return <Block className={className} width={width} height={height} />
    case 'bookmark':
      return <Bookmark className={className} width={width} height={height} />
    case 'bookmarkfilled':
      return (
        <BookmarkFilled className={className} width={width} height={height} />
      )
    case 'check':
      return <Check className={className} width={width} height={height} />
    case 'chevrondown':
      return <ChevronDown className={className} width={width} height={height} />
    case 'chevronleft':
      return <ChevronLeft className={className} width={width} height={height} />
    case 'chevronright':
      return (
        <ChevronRight className={className} width={width} height={height} />
      )
    case 'chevronup':
      return <ChevronUp className={className} width={width} height={height} />
    case 'close':
      return <Close className={className} width={width} height={height} />
    case 'comment':
      return <Comment className={className} width={width} height={height} />
    case 'commentfilled':
      return (
        <CommentFilled className={className} width={width} height={height} />
      )
    case 'delete':
      return <Delete className={className} width={width} height={height} />
    case 'dots':
      return <Dots className={className} width={width} height={height} />
    case 'edit':
      return <Edit className={className} width={width} height={height} />
    case 'flag':
      return <Flag className={className} width={width} height={height} />
    case 'follow':
      return <Follow className={className} width={width} height={height} />
    case 'hide':
      return <Hide className={className} width={width} height={height} />
    case 'heart':
      return <Heart className={className} width={width} height={height} />
    case 'heartfilled':
      return <HeartFilled className={className} width={width} height={height} />
    case 'link':
      return <Link className={className} width={width} height={height} />
    case 'logout':
      return <Logout className={className} width={width} height={height} />
    case 'map':
      return <Map className={className} width={width} height={height} />
    case 'mute':
      return <Mute className={className} width={width} height={height} />
    case 'pin':
      return <Pin className={className} width={width} height={height} />
    case 'reuse':
      return <Reuse className={className} width={width} height={height} />
    case 'settings':
      return <Settings className={className} width={width} height={height} />
    case 'share':
      return <Share className={className} width={width} height={height} />
    case 'show':
      return <Show className={className} width={width} height={height} />
    case 'unfollow':
      return <Unfollow className={className} width={width} height={height} />
    case 'unmute':
      return <Unmute className={className} width={width} height={height} />
    case 'votedown':
      return <VoteDown className={className} width={width} height={height} />
    case 'voteup':
      return <VoteUp className={className} width={width} height={height} />
    default:
      return <div />
  }
}

export { Icon }
