import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import { AmaTextField } from 'src/components/AmaTextField'

import { RetroLogo } from '../../components/Svgs'
import { SearchGraphic } from '../../components/Svgs/SearchGraphic'

function HomePage() {
  const [search, setSearch] = useState<string>()
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
        <div className="mt-2 flex justify-center items-center">
          <SearchGraphic className="fixed z-[-2]" height={64} />
          <input
            style={{
              transform: 'translateX(70px)',
              color: 'black',
            }}
            className="z-[2] p-1 bg-transparent"
            value={search}
            placeholder="to implement"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default HomePage
