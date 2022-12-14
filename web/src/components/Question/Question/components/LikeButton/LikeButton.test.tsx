import { render, waitFor, screen } from '@redwoodjs/testing/web'
import { LikeButton } from './LikeButton'

describe('LikeButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LikeButton favorite={1} onFavoriteClick={() => {}} />)
    }).not.toThrow()
  })

  it('hides how many people have favorited if less than 1', async () => {
    mockCurrentUser({
      username: 'selfteachme',
      fullName: 'Amy Dutton',
      id: 1,
      email: 'amy@amaanything.com',
      avatar: '',
      avatarColor: 'PUNCH',
    })

    render(<LikeButton favorite={0} onFavoriteClick={() => {}} />)
    await waitFor(() =>
      expect(screen.getByTestId('favoritedQuestion')).toHaveTextContent('')
    )
  })

  it('hides if logged out and less than 1', async () => {
    render(<LikeButton favorite={0} onFavoriteClick={() => {}} />)
    expect(screen.queryByTestId('favoritedQuestion')).not.toBeInTheDocument()
  })
})
