interface IDots {
  className?: string
  height?: string
  width?: string
}

const Dots = ({
  className = '',
  height = '24',
  width = '24',
}: IDots): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="2.25" />
      <circle cx="18.75" cy="12" r="2.25" />
      <circle cx="5.25" cy="12" r="2.25" />
    </svg>
  )
}

export { Dots }
