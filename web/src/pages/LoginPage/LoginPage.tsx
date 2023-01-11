import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import { Footer } from 'src/components/Footer'

import { useDevice } from '../../hooks/useDevice'

import { DesktopBackground, MobileBackground } from './BackgroundLayers'
import { LoginForm } from './LoginForm'

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

const ContentContainer = () => {
  const { isMobile } = useDevice()
  return (
    <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2">
      {isMobile ? (
        <MobileBackground />
      ) : (
        <>
          <DesktopBackground />
          <Spacer />
        </>
      )}
      <LoginForm />
    </div>
  )
}

const Spacer = () => <div></div>
