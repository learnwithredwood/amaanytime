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

const BlackBar = (props?: Record<string, string>) => (
  <div
    style={{
      height: '2px',
      background: 'black',
      width: props?.w || '33px',
      ...props,
    }}
  ></div>
)

const LeftStaggeredBars = () => (
  <div
    style={{
      WebkitTransform: 'scaleX(-1)',
      transform: 'scaleX(-1)',
    }}
    className="flex flex-col gap-1"
  >
    <BlackBar w="100px" />
    <BlackBar w="80px" />
  </div>
)

const RightStaggeredBars = () => (
  <div className="flex flex-col gap-1">
    <BlackBar w="100px" />
    <BlackBar w="80px" />
  </div>
)

const DoubleBars = () => (
  <div className="flex flex-col gap-1">
    <BlackBar />
    <BlackBar />
  </div>
)

const FooterText = ({ children }: { children: React.ReactNode }) => (
  <div className="font-condensed text-sm uppercase">{children}</div>
)
