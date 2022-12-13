import { render, screen } from '@redwoodjs/testing/web'

import { Avatar } from './Avatar'
import { Avatar as data, AvatarNoImage } from './Avatar.mocks'

describe('Avatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Avatar {...data} />)
    }).not.toThrow()
  })

  it('Displays the correct image', () => {
    render(<Avatar {...data} />)
    expect(screen.getByAltText(data.alt)).toHaveAttribute('src', data.src)
  })

  it('Uses the correct alt text', () => {
    render(<Avatar {...data} />)
    expect(screen.getByAltText(data.alt)).toBeInTheDocument()
  })

  it('creates an avatar when no avatar is provided', () => {
    render(<Avatar {...AvatarNoImage} />)
    expect(screen.getByTestId('initials')).toHaveTextContent('A')
  })

  it('displays the correct background color for the avatar', () => {
    render(<Avatar {...AvatarNoImage} avatarColor="PUNCH" />)
    expect(screen.getByTestId('avatar')).toHaveClass('PUNCH')
  })
  it('displays a default background color for the avatar', () => {
    render(<Avatar {...AvatarNoImage} />)
    expect(screen.getByTestId('avatar')).toHaveClass('PUNCH')
  })
})
