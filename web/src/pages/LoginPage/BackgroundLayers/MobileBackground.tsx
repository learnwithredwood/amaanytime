import MobileBgSvg from './mobile_bg_layer.svg'

export function MobileBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -3,
      }}
    >
      <MobileBgSvg />
    </div>
  )
}
