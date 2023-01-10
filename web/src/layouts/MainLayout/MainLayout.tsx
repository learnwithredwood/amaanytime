import { Toaster } from '@redwoodjs/web/dist/toast'

import { Footer } from 'src/components/Footer/Footer'
import { Navigation } from 'src/components/Navigation/Navigation'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
