interface IChevronDown {
  className?: string
  height?: string
  width?: string
}

const ChevronDown = ({
  className = '',
  height = '24',
  width = '24',
}: IChevronDown): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.2902 10.2901C16.9002 9.90006 16.2702 9.90006 15.8802 10.2901L12.0002 14.1701L8.12022 10.2901C7.73022 9.90006 7.10022 9.90006 6.71022 10.2901C6.32022 10.6801 6.32022 11.3101 6.71022 11.7001L11.3002 16.2901C11.6902 16.6801 12.3202 16.6801 12.7102 16.2901L17.3002 11.7001C17.6802 11.3201 17.6802 10.6801 17.2902 10.2901Z" />
    </svg>
  )
}

export { ChevronDown }
