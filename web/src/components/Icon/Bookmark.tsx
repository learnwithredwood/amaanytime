interface IBookmark {
  className?: string
  height?: string
  width?: string
}

const Bookmark = ({
  className = '',
  height = '24',
  width = '24',
}: IBookmark): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.1509 0H5.81755C4.35088 0 3.16421 1.2 3.16421 2.66667L3.15088 24L12.4842 20L21.8175 24V2.66667C21.8175 1.2 20.6175 0 19.1509 0ZM19.1509 20L12.4842 17.0933L5.81755 20V2.66667H12.4842H19.1509V20Z" />
    </svg>
  )
}

export { Bookmark }
