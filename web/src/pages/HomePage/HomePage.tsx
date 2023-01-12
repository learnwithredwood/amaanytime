import { MetaTags } from '@redwoodjs/web'

import { RetroLogo } from '../../components/Svgs'

function HomePage() {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'translateY(-5%)',
          flexDirection: 'column',
          zIndex: -1,
        }}
      >
        <RetroLogo height={400} />
      </div>
    </>
  )
}

export default HomePage
