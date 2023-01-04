import { Toaster } from '@redwoodjs/web/dist/toast'

import { Footer } from 'src/components/Footer'
import { Navigation } from 'src/components/Navigation'

import { PaperLayout } from '../PaperLayout'

const MainLayout = ({ children }) => {
  return (
    <PaperLayout>
      <div className="m-4">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <Navigation />
        {children}
        <Footer />
      </div>
    </PaperLayout>
  )
}

export { MainLayout }
