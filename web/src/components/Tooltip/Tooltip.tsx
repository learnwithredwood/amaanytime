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
        className={`inline-block whitespace-nowrap bg-ulcaGold py-1 px-2 font-slab text-xs uppercase text-black ${className}`}
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
