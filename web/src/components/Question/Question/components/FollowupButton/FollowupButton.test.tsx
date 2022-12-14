import { render } from '@redwoodjs/testing/web'

import { FollowupButton } from './FollowupButton'

describe('FollowupButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FollowupButton followUp={1} onFollowUpClick={() => {}} />)
    }).not.toThrow()
  })
})
