import { useEffect, useRef, RefObject } from 'react'

import { Icon, IIcon } from '../Icon/Icon'

export interface IDropdownMenuOptions {
  icon?: IIcon
  label: string
  action?: () => void
}

export interface IDropdownMenu {
  className?: string
  direction?:
    | 'bottom left'
    | 'bottom center'
    | 'bottom right'
    | 'top left'
    | 'top center'
    | 'top right'
  isShowing: boolean
  options: IDropdownMenuOptions[]
  triggerRef?: RefObject<HTMLButtonElement>
  onClickOutside?: () => void
}

const DropdownMenu = ({
  className,
  direction = 'bottom right',
  isShowing,
  onClickOutside,
  triggerRef,
  options,
}: IDropdownMenu) => {
  const dropdownRef = useRef(null)

  // REFERENCE: https://blog.logrocket.com/detect-click-outside-react-component-how-to/
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef &&
        !triggerRef.current.contains(event.target)
      ) {
        onClickOutside && onClickOutside()
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [onClickOutside, triggerRef])

  if (isShowing)
    return (
      <div
        className={`tooltip-tag inline-block bg-ulcaGold text-ulcaGold ${className} ${direction}`}
        data-testid="dropdownMenu"
        ref={dropdownRef}
      >
        <ul>
          {options &&
            options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={option.action}
                  className="flex min-h-[40px] w-full items-center justify-start gap-3 bg-ulcaGold pl-4 pr-5 font-slab text-sm font-extrabold uppercase leading-10 text-black hover:bg-heatWave"
                >
                  {option.icon && <Icon name={option.icon.name} />}
                  <span className="whitespace-nowrap">{option.label}</span>
                </button>
              </li>
            ))}
        </ul>
      </div>
    )
  return <span />
}

export { DropdownMenu }
