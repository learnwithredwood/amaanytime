import AMASVG from './AMAanytime.svg'

export const AMAanytime = ({ className }: { className?: string }) => {
  return (
    <div className="flex items-center justify-center p-5 sm:p-10">
      <AMASVG
        aria-labelledby="amaanytime-logo"
        className={className}
        role="img"
      />
    </div>
  )
}
