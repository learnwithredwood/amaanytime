interface IChevronRight {
  className?: string
  height?: string
  width?: string
}

const ChevronRight = ({
  className = '',
  height = '24',
  width = '24',
}: IChevronRight): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.2925 6.29376C8.9025 6.68376 8.9025 7.31376 9.2925 7.70376L13.1725 11.5838L9.2925 15.4638C8.9025 15.8538 8.9025 16.4838 9.2925 16.8738C9.6825 17.2638 10.3125 17.2638 10.7025 16.8738L15.2925 12.2838C15.6825 11.8938 15.6825 11.2638 15.2925 10.8738L10.7025 6.28376C10.3225 5.90376 9.6825 5.90376 9.2925 6.29376Z" />
    </svg>
  )
}

export { ChevronRight }
