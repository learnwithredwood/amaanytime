import { useAuth } from '@redwoodjs/auth'
import { Icon } from 'src/components/Icon'

const FollowupButton = ({ followUp, onFollowUpClick }) => {
  const { currentUser } = useAuth()

  if (currentUser || followUp > 0)
    return (
      <button
        className={`col-start-1 col-span-1 flex justify-center ${
          currentUser && `hover:text-punch`
        }`}
        data-testid="followUpQuestion"
        onClick={onFollowUpClick}
        disabled={!currentUser}
      >
        {followUp ? (
          <span className="selected-action action">
            <Icon name="commentFilled" />
            {followUp}
          </span>
        ) : (
          <Icon name="comment" />
        )}
      </button>
    )

  return <span />
}

export { FollowupButton }
