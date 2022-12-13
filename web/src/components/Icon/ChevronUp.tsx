interface IChevronUp {
  className?: string
  height?: string
  width?: string
}

const ChevronUp = ({
  className = '',
  height = '24',
  width = '24',
}: IChevronUp): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.29376 13.7075C6.68376 14.0975 7.31376 14.0975 7.70376 13.7075L11.5838 9.8275L15.4638 13.7075C15.8538 14.0975 16.4838 14.0975 16.8738 13.7075C17.2638 13.3175 17.2638 12.6875 16.8738 12.2975L12.2838 7.7075C11.8938 7.3175 11.2638 7.3175 10.8738 7.7075L6.28376 12.2975C5.90376 12.6775 5.90376 13.3175 6.29376 13.7075Z" />
    </svg>
  )
}

export { ChevronUp }
