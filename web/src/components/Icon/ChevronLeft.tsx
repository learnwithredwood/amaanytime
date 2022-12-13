interface IChevronLeft {
  className?: string
  height?: string
  width?: string
}

const ChevronLeft = ({
  className = '',
  height = '24',
  width = '24',
}: IChevronLeft): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.2925 16.8727C15.6825 16.4827 15.6825 15.8527 15.2925 15.4627L11.4125 11.5827L15.2925 7.70274C15.6825 7.31274 15.6825 6.68274 15.2925 6.29274C14.9025 5.90274 14.2725 5.90274 13.8825 6.29274L9.29246 10.8827C8.90246 11.2727 8.90246 11.9027 9.29246 12.2927L13.8825 16.8827C14.2625 17.2627 14.9025 17.2627 15.2925 16.8727Z" />
    </svg>
  )
}

export { ChevronLeft }
