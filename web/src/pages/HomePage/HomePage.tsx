import { MetaTags } from '@redwoodjs/web'

import { ZealLogo } from '../../components/ZealLogo'

function HomePage() {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div
        data-testid="home-page"
        className="m-10 flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl">AMA Anytime!</h1>
        <ZealLogo width={300} />
      </div>
    </>
  )
}

export default HomePage
