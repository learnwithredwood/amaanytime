interface ICheck {
  className?: string
  height?: string
  width?: string
}

const Check = ({
  className = '',
  height = '24',
  width = '24',
}: ICheck): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.6543 17.2958L5.54868 14.1752C4.97857 13.5901 4.97857 12.6599 5.54868 12.0748C6.1338 11.4897 7.07899 11.4897 7.66411 12.0748L9.70451 14.1302L16.3358 7.43884C16.921 6.85372 17.8662 6.85372 18.4513 7.43884C19.0214 8.02396 19.0214 8.95414 18.4513 9.53926L10.7547 17.2958C10.1996 17.8959 9.23942 17.8959 8.6543 17.2958Z" />
    </svg>
  )
}

export { Check }
