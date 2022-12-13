import { useRef, useState } from 'react'

import { back } from '@redwoodjs/router'

import { DropdownMenu } from '../DropdownMenu'
import { Icon } from '../Icon'

export interface IPageHeading {
  isActionsShowing?: boolean
  isBackShowing?: boolean
  title: string
}

const PageHeading = ({
  isActionsShowing = false,
  isBackShowing = false,
  title,
}: IPageHeading): JSX.Element => {
  const [isActionsDropdownShowing, setIsActionsDropdownShowing] =
    useState(false)
  const triggerRef = useRef()

  const toggleActionsDropdownShowing = () => {
    setIsActionsDropdownShowing((prevValue) => !prevValue)
  }

  return (
    <div className="mb-1 grid grid-cols-6 border-b-2 border-black bg-[#E4E2DD]/[.75] pt-12 pb-4 pr-10 mix-blend-multiply">
      <div className="relative col-span-5 col-start-2 flex justify-between">
        {isBackShowing && (
          <div className="absolute -bottom-2 -left-14">
            <button
              onClick={() => back()}
              className="translate-x-0 transition-transform hover:-translate-x-2 hover:text-punch"
            >
              <Icon name="arrow" />
            </button>
          </div>
        )}
        <h1 className="pl-5 font-slab text-base font-extrabold uppercase tracking-wider">
          {title}
        </h1>
        {isActionsShowing && (
          <>
            {isActionsDropdownShowing && (
              <DropdownMenu
                isShowing={true}
                onClickOutside={() => isActionsDropdownShowing()}
                options={[
                  {
                    label: 'Clear All Bookmarks',
                    icon: { name: 'delete' },
                    action: () => {},
                  },
                ]}
                className="absolute -right-2 top-9 z-tooltip"
                direction="top right"
                triggerRef={triggerRef}
              />
            )}
            <button
              data-testid="actonButtons"
              onClick={toggleActionsDropdownShowing}
            >
              <Icon name="dots" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export { PageHeading }
