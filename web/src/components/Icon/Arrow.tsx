interface IArrow {
  className?: string
  height?: string
  width?: string
}

const Arrow = ({
  className = '',
  height = '24',
  width = '24',
}: IArrow): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 6C9.3 6 9.5 6.1 9.7 6.3C10.1 6.7 10.1 7.3 9.7 7.7L4.7 12.7C4.3 13.1 3.7 13.1 3.3 12.7C2.9 12.3 2.9 11.7 3.3 11.3L8.3 6.3C8.5 6.1 8.7 6 9 6Z" />
      <path d="M4 11C4.3 11 4.5 11.1 4.7 11.3L9.7 16.3C10.1 16.7 10.1 17.3 9.7 17.7C9.3 18.1 8.7 18.1 8.3 17.7L3.3 12.7C2.9 12.3 2.9 11.7 3.3 11.3C3.5 11.1 3.7 11 4 11Z" />
      <path d="M4 11L20 11C20.6 11 21 11.4 21 12C21 12.6 20.6 13 20 13L4 13C3.4 13 3 12.6 3 12C3 11.4 3.4 11 4 11Z" />
    </svg>
  )
}

export { Arrow }
