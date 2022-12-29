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
      className="mt-1 border-t-2 border-black lg:w-8/12"
      data-testid="copyright"
    >
      <nav className="w-full py-5 font-semibold">
        <ul className="flex flex-wrap justify-center p-3 text-center leading-10">
          <li>
            <Link className="py-3 px-1" to={routes.about()}>
              About
            </Link>
          </li>
          <span className="mx-2">•</span>
          <li>
            <Link className="py-3 px-1" to={routes.waitingList()}>
              Invites
            </Link>
          </li>
          <span className="mx-2">•</span>
          <li>
            <Link className="py-3 px-1" to={routes.contact()}>
              Contact
            </Link>
          </li>
          <span className="mx-2">•</span>
          <li>
            <Link className="py-3 px-1" to={routes.privacyPolicy()}>
              Privacy Policy
            </Link>
          </li>
          <span className="invisible md:visible md:mx-2">•</span>
          <li>
            <Link className="py-3 px-1" to={routes.termsAndConditions()}>
              Terms and Conditions
            </Link>
          </li>
          <span className="mx-2">•</span>
          <li>
            <Link className="py-3 px-1" to={routes.disclaimers()}>
              Disclaimers
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex w-full items-center justify-center gap-2 border-t-2 border-black pt-5 pb-6 font-condensed text-2xl uppercase">
        <div className="flex gap-2">
          Copyright &copy;{getCurrentYear()}.{' '}
          <span className="h-0.5 w-6 border-y-2 p-2"></span>
        </div>
        <a href="http://codingzeal.com" target="_blank" rel=" noreferrer">
          <ZealLogoAlt />
        </a>
        <div className="flex gap-2">
          <span className="h-0.5 w-4 border-y-2 p-2"></span>
          <div>All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
