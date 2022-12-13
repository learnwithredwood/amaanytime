import { MetaTags } from '@redwoodjs/web'

import { PageHeading } from 'src/components/PageHeading/'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <PageHeading title="About" isActionsShowing={false} />
    </>
  )
}

export default AboutPage
