import { Link, routes } from '@redwoodjs/router'

import { CopyrightInfo } from './CopyrightBar'

export const Footer = () => {
  return (
    <>
      <SiteLinks />
      <CopyrightInfo />
    </>
  )
}

const SiteLinks = () => (
  <div className="flex items-center justify-center">
    <div
      style={{
        borderTop: 'solid 2px black',
        borderBottom: 'solid 2px black',
      }}
      className="flex w-9/12 items-center justify-center gap-4 py-4"
    >
      {FOOTER_ITEMS.flatMap((item) => [
        <Dot key={`${item.text}-dot`} />,
        <LinkItem key={item.text} link={item.link()}>
          {item.text}
        </LinkItem>,
      ]).slice(1)}
    </div>
  </div>
)

const FOOTER_ITEMS = [
  {
    text: 'About',
    link: () => routes.about(),
  },
  {
    text: 'Invites',
    link: () => routes.waitingList(),
  },
  {
    text: 'Contact',
    link: () => routes.contact(),
  },
  {
    text: 'Privacy Policy',
    link: () => routes.privacyPolicy(),
  },
  {
    text: 'Terms and Conditions',
    link: () => routes.termsAndConditions(),
  },
  {
    text: 'Disclaimers',
    link: () => routes.disclaimers(),
  },
]

const LinkItem = ({ children, link }) => (
  <div className="text-sm font-semibold">
    <Link to={link}>{children} </Link>
  </div>
)

const Dot = () => (
  <div
    style={{
      height: '5px',
      width: '5px',
      background: 'black',
      borderRadius: '50%',
      display: 'inline-block',
    }}
  ></div>
)
