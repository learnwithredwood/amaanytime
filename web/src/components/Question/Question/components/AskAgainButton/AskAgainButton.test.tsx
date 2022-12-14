import { render } from '@redwoodjs/testing/web'

import { AskAgainButton } from './AskAgainButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AskAgainButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AskAgainButton />)
    }).not.toThrow()
  })
})
