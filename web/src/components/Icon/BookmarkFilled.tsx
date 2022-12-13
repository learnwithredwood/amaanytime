interface IBookmarkFilled {
  className?: string
  height?: string
  width?: string
}

const BookmarkFilled = ({
  className = '',
  height = '24',
  width = '24',
}: IBookmarkFilled): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.6667 0H5.33341C3.86675 0 2.68008 1.2 2.68008 2.66667L2.66675 24L12.0001 20L21.3334 24V2.66667C21.3334 1.2 20.1334 0 18.6667 0Z" />
    </svg>
  )
}

export { BookmarkFilled }
