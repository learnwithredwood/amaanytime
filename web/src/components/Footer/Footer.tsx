import { Link, routes } from '@redwoodjs/router'

import { useDevice } from '../../hooks/useDevice'

import { CopyrightInfo } from './CopyrightBar'

export const Footer = () => {
  return (
    <div>
      <SiteLinks />
      <CopyrightInfo />
    </div>
  )
}

const SiteLinks = () => (
  <div className="flex items-center justify-center">
    <div
      style={{
        borderTop: 'solid 2px black',
        borderBottom: 'solid 2px black',
      }}
      className="flex w-11/12 items-center justify-between py-2 lg:w-11/12 lg:justify-center lg:gap-4 lg:py-4"
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

const LinkItem = ({ children, link }) => {
  const { isMobile } = useDevice()
  return (
    <div
      style={{
        fontSize: isMobile ? '9px' : '0.8rem',
      }}
      className="font-semibold"
    >
      <Link to={link}>{children} </Link>
    </div>
  )
}

const Dot = () => {
  const { isMobile } = useDevice()
  return (
    <div
      style={{
        height: '5px',
        width: '5px',
        background: 'black',
        borderRadius: '50%',
        display: isMobile ? 'none' : 'inline-block',
      }}
    ></div>
  )
}
