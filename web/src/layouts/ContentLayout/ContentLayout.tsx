import { Footer } from 'src/components/Footer'
import { LoggedInUser } from 'src/components/LoggedInUser/LoggedInUser'
import { Navigation } from 'src/components/Navigation'

type ContentLayoutProps = {
  children?: React.ReactNode
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div className="grid grid-cols-12">
      {/* NAVIGATION */}
      <div className="col-span-3">
        <div className="relative min-h-screen border-r-2 border-black">
          <Navigation notifications={3} />
          <div className="absolute left-0 bottom-0 w-full">
            <LoggedInUser
              avatar="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              firstName={'Amy'}
              lastName={'Dutton'}
              username={'selfteachme'}
            />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="col-span-6">
        <div className="h-screen w-full overflow-y-auto">
          {children}
          <Footer />
        </div>
      </main>

      {/* ASIDE */}
      <aside className="col-span-3">
        <div className="h-screen overflow-y-auto border-l-2 border-black py-4 pl-8">
          &nbsp;
        </div>
      </aside>
    </div>
  )
}

export { ContentLayout }
