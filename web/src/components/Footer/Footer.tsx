import { getYear } from 'date-fns'
import { ZealLogoAlt } from 'web/src/components/ImageComponents/ZealLogoAlt/ZealLogoAlt'

import { Link, routes } from '@redwoodjs/router'

const getCurrentYear = (): string => {
  const year = getYear(new Date(Date.now())).toString()
  return year
}

const Footer = () => {
  return (
    <footer
      className="relative mt-1 border-t-2 border-black"
      data-testid="copyright"
    >
      <nav className="footer-nav w-full py-5 text-center font-semibold">
        <ul className="flex flex-wrap justify-center">
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.waitingList()}>Invites</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact</Link>
          </li>
          <li>
            <Link to={routes.privacyPolicy()}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={routes.termsAndConditions()}>Terms and Conditions</Link>
          </li>
          <li>
            <Link to={routes.disclaimers()}>Disclaimers</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-2 border-t-2 border-black pt-5 pb-6 font-condensed text-2xl uppercase">
        Copyright &copy;{getCurrentYear()}.{' '}
        <div className="mx-3 flex">
          <span className="border-b-2 border-t-2 p-2"></span>
          <a href="http://codingzeal.com" target="_blank" rel=" noreferrer">
            <ZealLogoAlt />
          </a>
        </div>
        <div className="flex gap-2">
          <span className="border-b-2 border-t-2 p-2"></span>
          <div>All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
