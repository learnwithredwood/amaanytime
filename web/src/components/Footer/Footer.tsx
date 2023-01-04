import { getYear } from 'date-fns'

import { Link, routes } from '@redwoodjs/router'

const getCurrentYear = (): string => {
  const year = getYear(new Date(Date.now())).toString()
  return year
}

const Footer = () => {
  return (
    <footer
      className="fixed bottom-0 p-5 w-full"
      data-testid="copyright"
    >
      <nav className="footer-nav w-full pb-2 text-center font-semibold">
        <ul className="flex flex-wrap justify-center gap-4">
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact</Link>
          </li>
          <li>
            <Link to={routes.waitingList()}>Waiting List</Link>
          </li>
          <li>
            <Link to={routes.termsAndConditions()}>Terms and Conditions</Link>
          </li>
          <li>
            <Link to={routes.privacyPolicy()}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={routes.disclaimers()}>Disclaimers</Link>
          </li>
        </ul>
      </nav>
      <div className="text-center">
        Copyright &copy;{getCurrentYear()}.{' '}
        <a
          href="http://codingzeal.com"
          target="_blank"
          className="underline"
          rel="noopener noreferrer"
        >
          Coding ZEAL
        </a>
        . All Rights Reserved.
      </div>
    </footer>
  )
}

export { Footer }
