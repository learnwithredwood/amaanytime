import { render, screen } from '@redwoodjs/testing/web'

import { PageHeading } from './PageHeading'

describe('PageHeading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageHeading title="Something" />)
    }).not.toThrow()
  })

  it('shows the title', () => {
    render(<PageHeading title="Something" />)
    expect(screen.getByText('Something')).toBeInTheDocument()
  })

  it('shows the action buttons', () => {
    render(<PageHeading title="Something" isActionsShowing={true} />)
    expect(screen.getByTestId('actonButtons')).toBeInTheDocument()
  })

  it('hides the action buttons', () => {
    render(<PageHeading title="Something" isActionsShowing={false} />)
    expect(screen.queryByTestId('actonButtons')).not.toBeInTheDocument()
  })

  it('hides the action buttons by default', () => {
    render(<PageHeading title="Something" />)
    expect(screen.queryByTestId('actonButtons')).not.toBeInTheDocument()
  })
})
