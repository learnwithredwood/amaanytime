import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import { Footer } from 'src/components/Footer'

import { LoginForm } from './LoginForm'
import QuestionSvg from './questions_1440x1024.svg'
import RetroLogoSvg from './retro_logo-1440x1024.svg'
import StarsSvg from './stars_1440x1024.svg'

const GRID_LAYOUT = {
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr auto',
}

export default function LoginPage() {
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  return (
    <div style={GRID_LAYOUT}>
      <ContentContainer />
      <Footer />
    </div>
  )
}

const ContentContainer = () => (
  <div className="grid grid-cols-2">
    <BackgroundLayers />
    <Spacer />
    <LoginForm />
  </div>
)

const BACKGROUND_STYLE: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -3,
}

const BackgroundLayers = () => (
  <>
    <StarsSvg style={BACKGROUND_STYLE} />
    <RetroLogoSvg style={BACKGROUND_STYLE} />
    <QuestionSvg style={BACKGROUND_STYLE} />
  </>
)

const Spacer = () => <div></div>
