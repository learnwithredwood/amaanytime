import { routes } from '@redwoodjs/router'
import { render, screen, waitFor } from '@redwoodjs/testing/web'

import { Footer, GetYear } from './Footer'

describe('Footer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Footer />)
    }).not.toThrow()
  })

  it('displays the current year', () => {
    jest
      .spyOn(global.Date, 'now')
      .mockImplementationOnce(() =>
        new Date('2021-06-02T13:18:02.631Z').valueOf()
      )
    expect(GetYear()).toBe(2021)
  })

  it('links to the waiting list page', () => {
    render(<Footer />)
    expect(screen.getByText('Waiting List')).toHaveAttribute(
      'href',
      routes.waitingList()
    )
  })

  it('links to the privacy policy page', () => {
    render(<Footer />)
    expect(screen.getByText('Privacy Policy')).toHaveAttribute(
      'href',
      routes.privacyPolicy()
    )
  })

  it('links to the Terms and Conditions page', () => {
    render(<Footer />)
    expect(screen.getByText('Terms and Conditions')).toHaveAttribute(
      'href',
      routes.termsAndConditions()
    )
  })

  it('links to the disclaimers page', () => {
    render(<Footer />)
    expect(screen.getByText('Disclaimers')).toHaveAttribute(
      'href',
      routes.disclaimers()
    )
  })

  describe('user is logged in', () => {
    beforeEach(() => {
      mockCurrentUser({
        username: 'selfteachme',
        fullName: 'Amy Dutton',
        id: 1,
        email: 'amy@amaanything.com',
        avatar: '',
        avatarColor: 'PUNCH',
      })
      render(<Footer />)
    })

    it.skip('hides the waiting list link', async () => {
      await waitFor(() =>
        expect(screen.queryByText('Waiting List')).not.toBeInTheDocument()
      )
    })

    it.skip('shows the invite link', async () => {
      await waitFor(() =>
        expect(screen.getByText('Invites')).toBeInTheDocument()
      )
    })
  })
})
