import { getYear } from 'date-fns'

import { Link, routes } from '@redwoodjs/router'

export const GetYear = () => {
  const date = new Date(Date.now())
  return getYear(date)
}

const Footer = () => {
  return (
    <footer className="relative mt-1 border-t-2 border-black">
      <nav className="footer-nav w-full py-5 text-center font-semibold">
        <ul className="flex flex-wrap justify-center">
          <li>
            <Link to={routes.about()}>About</Link>
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
        <img src="/images/uneven-lines--left.svg" alt="Double Lines" />
        COPYRIGHT &copy; {GetYear()}.
        <img src="/images/double-lines.svg" alt="Double Lines" />
        <div className="mx-3">
          {/* TODO: turn Ah Ha Creative logo into SVG (instead of an img) so I can change the hover color */}
          <a href="http://ahhacreative.com" target="_blank" rel="noreferrer">
            <img src="/images/ah-ha-creative.svg" alt="Ah Ha Creative, LLC" />
          </a>
        </div>
        <img src="/images/double-lines.svg" alt="Double Lines" />
        ALL RIGHTS RESERVED.
        <img src="/images/uneven-lines--right.svg" alt="Double Lines" />
      </div>
    </footer>
  )
}

export { Footer }
