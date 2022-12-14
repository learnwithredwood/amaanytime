interface ITooltip {
  className?: string
  isShowing?: boolean
  text: string
}

const Tooltip = ({ className = '', isShowing = false, text }: ITooltip) => {
  // TODO: Animate this in and out
  if (isShowing)
    return (
      <div
        className={`bg-ulcaGold uppercase font-slab text-xs py-1 px-2 text-black inline-block whitespace-nowrap ${className}`}
        data-testid="tooltip"
      >
        {text}
      </div>
    )
  else {
    return <span />
  }
}

export { Tooltip }
