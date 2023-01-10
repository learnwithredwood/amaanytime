import { getYear } from 'date-fns'
import { ZealLogoAlt } from 'web/src/components/ImageComponents/ZealLogoAlt/ZealLogoAlt'

import { Link, routes } from '@redwoodjs/router'

const getCurrentYear = (): string => {
  const year = getYear(new Date(Date.now())).toString()
  return year
}

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

const renderFooterItems = () =>
  FOOTER_ITEMS.map((item, i) => {
    const n = FOOTER_ITEMS.length
    return (
      <div
        key={item.text}
        className="justify-centertext-xs flex items-center gap-3 font-semibold md:text-sm lg:text-lg"
      >
        <Link to={item.link()} className="">
          {item.text}
        </Link>
        {i !== n - 1 && (
          <span
            style={{
              height: '10px',
              width: '10px',
              background: 'black',
              borderRadius: '50%',
              display: 'inline-block',
            }}
          ></span>
        )}
      </div>
    )
  })

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-black" data-testid="copyright">
      <div className="flex w-full flex-wrap items-center justify-center gap-5 py-2 text-xs font-semibold md:text-sm lg:text-lg">
        {renderFooterItems()}
      </div>
      <div className="flex items-center justify-center gap-2 border-t-2 border-black pt-5 font-condensed text-2xl uppercase">
        <div className="flex items-center gap-2">
          <div>
            <span className="hidden h-0.5 border-t-2 p-0.5 lg:ml-6 lg:block lg:w-20"></span>
            <span className="hidden h-0.5 border-b-2 p-0.5 lg:ml-10 lg:block lg:w-16"></span>
          </div>
          Copyright &copy;{getCurrentYear()}.{' '}
          <span className="h-0.5 w-6 border-y-2 p-1 md:w-60 lg:w-8"></span>
        </div>
        <a href="http://codingzeal.com" target="_blank" rel=" noreferrer">
          <ZealLogoAlt />
        </a>
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-4 border-y-2 p-1 md:w-60 lg:w-10"></span>
          <div>All Rights Reserved.</div>
          <div>
            <span className="hidden h-0.5 border-t-2 p-0.5 lg:block lg:w-20"></span>
            <span className="hidden h-0.5 border-b-2 p-0.5 lg:block lg:w-16"></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
