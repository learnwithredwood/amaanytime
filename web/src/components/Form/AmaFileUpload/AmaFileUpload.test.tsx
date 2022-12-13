import { render } from '@redwoodjs/testing/web'

import { AmaFileUpload } from './AmaFileUpload'

describe('AmaFileUpload', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AmaFileUpload />)
    }).not.toThrow()
  })
})
