import { useDevice } from '../../hooks/useDevice'
import { ZealLogoBlackWhite } from '../Svgs/ZealLogoBlackWhite'

export const CopyrightInfo = () => (
  <div className="flex items-center justify-center gap-3 py-5">
    <LeftStaggeredBars />
    <FooterText>copyright © {new Date().getFullYear()}</FooterText>
    <DoubleBars />
    <ZealLogoBlackWhite height={44} />
    <DoubleBars />
    <FooterText>All rights reserved</FooterText>
    <RightStaggeredBars />
  </div>
)

const BlackBar = (props?: Record<string, string>) => {
  const { isMobile } = useDevice()
  return (
    <div
      style={{
        height: '2px',
        background: 'black',
        width: isMobile ? '0' : props?.w || '5em',
        ...props,
      }}
    ></div>
  )
}

const LeftStaggeredBars = () => (
  <div
    style={{
      WebkitTransform: 'scaleX(-1)',
      transform: 'scaleX(-1)',
    }}
    className="flex flex-col gap-1"
  >
    <BlackBar w="12em" />
    <BlackBar w="9em" />
  </div>
)

const RightStaggeredBars = () => (
  <div className="flex flex-col gap-1">
    <BlackBar w="12em" />
    <BlackBar w="9em" />
  </div>
)

const DoubleBars = () => (
  <div className="flex flex-col gap-1">
    <BlackBar />
    <BlackBar />
  </div>
)

const FooterText = ({ children }: { children: React.ReactNode }) => (
  <div className="font-condensed text-sm uppercase md:text-xl">{children}</div>
)
