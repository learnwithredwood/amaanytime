import { MetaTags } from '@redwoodjs/web'

import { PageHeading } from 'src/components/PageHeading/'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <PageHeading title="Contact" isActionsShowing={false} />
    </>
  )
}

export default ContactPage
