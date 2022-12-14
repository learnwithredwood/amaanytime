import { useAuth } from '@redwoodjs/auth'
import { useEffect, useState } from 'react'
import { Icon } from 'src/components/Icon'
import { Tooltip } from 'src/components/Tooltip'

export interface IAskAgainButton {
  userAskedAgain: boolean
  askAgainCount: number
}

const AskAgainButton = ({
  userAskedAgain,
  askAgainCount = 0,
}: IAskAgainButton): JSX.Element => {
  const { currentUser } = useAuth()
  const [showTooltip, setShowToolTip] = useState<boolean>(false)
  const [count, setCount] = useState<number>(askAgainCount)
  const [userAsked, setUserAsked] = useState<boolean>(userAskedAgain)

  useEffect(() => {
    setCount(askAgainCount)
  }, [askAgainCount])

  useEffect(() => {
    setUserAsked(userAskedAgain)
  }, [userAskedAgain])

  const onAskAgainClick = () => {
    console.log('clicked ask again')
  }

  const toggleToolTip = () => {
    setShowToolTip((prevValue) => !prevValue)
  }

  return (
    <button
      className={`col-start-3 col-span-1 flex justify-center relative ${
        currentUser && `hover:text-punch`
      }`}
      data-testid="askAgain"
      onClick={onAskAgainClick}
      onMouseEnter={toggleToolTip}
      onMouseLeave={toggleToolTip}
      disabled={!currentUser}
    >
      <span className={`action ${userAsked && `selected-action`}`}>
        <Icon name="reuse" width="30" height="30" /> {count > 0 && count}
      </span>
      {!currentUser && (
        <Tooltip
          text="Ask Again"
          isShowing={showTooltip}
          className="absolute top-8 left-1/2 -translate-x-1/2"
        />
      )}
    </button>
  )
}

export { AskAgainButton }
