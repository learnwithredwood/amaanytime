import './ama-logo.css'
import RetroLogo from './retro-logo.png'

export function AMALogo() {
  return (
    <div className="logo-container">
      <img src={RetroLogo} alt="AMA Logo" className="logo" width="50%" />
    </div>
  )
}
