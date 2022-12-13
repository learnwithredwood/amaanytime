interface IHeartFilled {
  className?: string
  height?: string
  width?: string
}

const HeartFilled = ({
  className = '',
  height = '24',
  width = '24',
}: IHeartFilled): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.1321 1.86785C20.8953 0.631015 19.2295 0 17.5888 0C15.9482 0 14.3075 0.631015 13.0455 1.86785L11.9854 2.92795L10.9253 1.86785C9.68843 0.631015 8.02268 0 6.38195 0C4.69083 0 2.99976 0.65621 1.73768 1.99392C-0.685507 4.54317 -0.533883 8.58171 1.93963 11.0553L11.2029 20.3186C11.632 20.7477 12.3136 20.7477 12.7175 20.3186L22.0817 10.9543C24.631 8.45578 24.631 4.36698 22.1321 1.86816L22.1321 1.86785Z" />
    </svg>
  )
}

export { HeartFilled }
