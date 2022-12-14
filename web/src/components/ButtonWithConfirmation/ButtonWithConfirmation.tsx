import { useEffect, useState } from 'react'

import { Icon } from '../Icon'
import { IIcon } from '../Icon/Icon'

export interface IButtonWithConfirmation {
  cancelLabel?: string
  className?: string
  confirmLabel?: string
  confirmationMessage?: string
  label: string
  handleClick?: () => void
  showConfirm?: boolean
  size?: 'small' | 'large'
  style?: 'solid' | 'inverted' | 'none' | 'underline'
  icon?: IIcon
  iconSide?: 'left' | 'right'
}

const ButtonWithConfirmation = ({
  cancelLabel = 'NO',
  className = '',
  confirmLabel = 'YES',
  confirmationMessage = 'Are you sure?',
  label,
  handleClick,
  showConfirm = false,
  size = 'large',
  style = 'inverted',
  icon,
  iconSide,
}: IButtonWithConfirmation): JSX.Element => {
  const [isConfirm, setIsConfirm] = useState<boolean>(showConfirm)

  useEffect(() => {
    setIsConfirm(showConfirm)
  }, [showConfirm])

  const toggleConfirm = () => {
    setIsConfirm((prevValue) => !prevValue)
  }

  if (isConfirm)
    return (
      <div
        className={`confirmation flex items-center font-slab uppercase ${size}`}
      >
        <div>{confirmationMessage}</div>
        <button
          className="flex items-center justify-center text-red-600"
          onClick={handleClick}
        >
          <Icon name="check" />
          {confirmLabel}
        </button>
        <button
          className="flex items-center justify-center text-gray"
          onClick={toggleConfirm}
        >
          <Icon name="close" />
          {cancelLabel}
        </button>
      </div>
    )

  return (
    <button
      className={`cursor-pointer rounded-3xl font-slab uppercase ${className} ${size} ${
        style === 'inverted' &&
        `border-2 border-black bg-transparent text-black hover:border-punch hover:bg-punch hover:text-white`
      } ${style === 'solid' && `bg-punch text-white hover:bg-veridianGreen`} ${
        style === 'none' && `bg-transparent text-black hover:text-punch`
      } ${
        style === 'underline' &&
        `bg-transparent text-black underline hover:text-punch hover:no-underline`
      } ${
        iconSide === 'left' &&
        'flex flex-row-reverse items-center justify-center gap-2'
      } ${iconSide === 'right' && 'flex items-center justify-center gap-2'}`}
      data-testid="button"
      onClick={toggleConfirm}
    >
      <span>{label}</span>
      {icon && (
        <span data-testid="icon">
          <Icon name={icon.name} />
        </span>
      )}
    </button>
  )
}

export { ButtonWithConfirmation }
