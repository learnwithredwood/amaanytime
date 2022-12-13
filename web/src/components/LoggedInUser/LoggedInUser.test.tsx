import { render, screen } from '@redwoodjs/testing/web'

import { LoggedInUser } from './LoggedInUser'

// TODO: Move data into a mocks file

describe('LoggedInUser', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <LoggedInUser
          avatar={'https://i.pravatar.cc/150?u=a042581f4e29026704d'}
          avatarColor="GREENSHEEN"
          fullName={'Amy Dutton'}
          username={'selfteachme'}
        />
      )
    }).not.toThrow()
  })

  it("displays the person's name", () => {
    render(
      <LoggedInUser
        avatar={'https://i.pravatar.cc/150?u=a042581f4e29026704d'}
        avatarColor="GREENSHEEN"
        fullName={'Amy Haywood'}
        username={'selfteachme'}
      />
    )
    expect(screen.getByText('Amy Haywood')).toBeInTheDocument()
  })

  it("displays the person's username", () => {
    render(
      <LoggedInUser
        avatar={'https://i.pravatar.cc/150?u=a042581f4e29026704d'}
        avatarColor="GREENSHEEN"
        fullName={'Amy Dutton'}
        username={'selfteachme'}
      />
    )
    expect(screen.getByText('@selfteachme')).toBeInTheDocument()
  })

  // TODO: Write missing tests
  it.skip('shows the dropdown menu', () => {})
  it.skip('hides the dropdown', () => {})
})
