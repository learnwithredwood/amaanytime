import { Toaster } from '@redwoodjs/web/dist/toast'

import { Footer } from 'src/components/Footer'
import { Navigation } from 'src/components/Navigation'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <div
        style={{
          height: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: 'auto 1fr auto',
        }}
      >
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  )
}
