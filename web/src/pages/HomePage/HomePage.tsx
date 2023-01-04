import { MetaTags } from '@redwoodjs/web'

import { AMALogo } from 'src/components/Footer/Home/RetroLogo/AMALogo'

function HomePage() {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div
        data-testid="home-page"
        className="m-10 flex flex-col items-center justify-center"
      >
        <AMALogo />
      </div>
    </>
  )
}

export default HomePage
