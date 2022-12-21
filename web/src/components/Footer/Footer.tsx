import { getYear } from 'date-fns'
import ZealLogo from 'web/src/images/zeal-one-color-logo.svg'

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
      <div>
        Copyright &copy;{getCurrentYear()}.{' '}
        <a
          href="http://codingzeal.com"
          target="_blank"
          className="underline"
          rel="noopener noreferrer"
        >
          <ZealLogo />
          Coding ZEAL
        </a>
        . All Rights Reserved.
      </div>
    </footer>
  )
}

export { Footer }
