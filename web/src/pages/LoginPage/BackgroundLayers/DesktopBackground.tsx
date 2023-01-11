import QuestionsLayerSvg from './QuestionsLayer.svg'
import RetroLogoLayerSvg from './RetroLogoLayer.svg'
import StarsLayerSvg from './StarsLayer.svg'

const BACKGROUND_STYLE: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -3,
}

export const DesktopBackground = () => (
  <>
    <StarsLayerSvg style={BACKGROUND_STYLE} />
    <RetroLogoLayerSvg style={BACKGROUND_STYLE} />
    <QuestionsLayerSvg style={BACKGROUND_STYLE} />
  </>
)
