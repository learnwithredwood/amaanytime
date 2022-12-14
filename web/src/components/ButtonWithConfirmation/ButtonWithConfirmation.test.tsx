import { render } from '@redwoodjs/testing/web'

import { ButtonWithConfirmation } from './ButtonWithConfirmation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ButtonWithConfirmation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ButtonWithConfirmation />)
    }).not.toThrow()
  })
})
