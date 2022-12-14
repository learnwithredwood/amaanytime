import { render, screen } from '@redwoodjs/testing/web'

import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tooltip text="something" />)
    }).not.toThrow()
  })

  it('shows the label', () => {
    render(<Tooltip text="something" isShowing={true} />)
    expect(screen.getByTestId('tooltip')).toHaveTextContent('something')
  })

  it('shows the tooltip', () => {
    render(<Tooltip text="something" isShowing={true} />)
    expect(screen.getByTestId('tooltip')).toBeVisible()
  })

  it('hides the tooltip', () => {
    render(<Tooltip text="something" isShowing={false} />)
    expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument()
  })
})
