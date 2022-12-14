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
        className={`font-slab uppercase flex confirmation items-center ${size}`}
      >
        <div>{confirmationMessage}</div>
        <button
          className="text-red-600 flex justify-center items-center"
          onClick={handleClick}
        >
          <Icon name="check" />
          {confirmLabel}
        </button>
        <button
          className="text-gray flex justify-center items-center"
          onClick={toggleConfirm}
        >
          <Icon name="close" />
          {cancelLabel}
        </button>
      </div>
    )

  return (
    <button
      className={`rounded-3xl font-slab uppercase cursor-pointer ${className} ${size} ${
        style === 'inverted' &&
        `bg-transparent hover:bg-punch text-black hover:text-white border-2 border-black hover:border-punch`
      } ${style === 'solid' && `bg-punch hover:bg-veridianGreen text-white`} ${
        style === 'none' && `bg-transparent text-black hover:text-punch`
      } ${
        style === 'underline' &&
        `underline hover:no-underline bg-transparent text-black hover:text-punch`
      } ${
        iconSide === 'left' &&
        'flex flex-row-reverse gap-2 items-center justify-center'
      } ${iconSide === 'right' && 'flex gap-2 items-center justify-center'}`}
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
