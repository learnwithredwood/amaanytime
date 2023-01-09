import { render } from '@redwoodjs/testing/web'

import { SearchInput } from './SearchInput'

describe('SearchInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchInput />)
    }).not.toThrow()
  })

  // TODO: WRITE SKIPPED TESTS
  it('submits the search form', () => {})
})
