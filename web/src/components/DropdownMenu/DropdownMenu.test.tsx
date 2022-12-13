import { render, screen } from '@redwoodjs/testing/web'

import { DropdownMenu } from './DropdownMenu'
import { DropdownMenuOptions } from './DropdownMenu.mocks'

describe('DropdownMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DropdownMenu isShowing={true} options={DropdownMenuOptions} />)
    }).not.toThrow()
  })

  // TODO: Write skipped tests
  it('shows by default', () => {
    render(<DropdownMenu isShowing={true} options={DropdownMenuOptions} />)
    expect(screen.getByTestId('dropdownMenu')).toBeInTheDocument()
  })

  it('is hidden by default', () => {
    render(<DropdownMenu isShowing={false} options={DropdownMenuOptions} />)
    expect(screen.queryByTestId('dropdownMenu')).not.toBeInTheDocument()
  })

  it.skip('clicking outside hides it', () => {})

  it('lists all the options', () => {
    render(<DropdownMenu isShowing={true} options={DropdownMenuOptions} />)
    expect(screen.getByText(DropdownMenuOptions[0].label)).toBeInTheDocument()
    expect(screen.getByText(DropdownMenuOptions[1].label)).toBeInTheDocument()
    expect(screen.getByText(DropdownMenuOptions[2].label)).toBeInTheDocument()
    expect(screen.getByText(DropdownMenuOptions[3].label)).toBeInTheDocument()
  })

  it.skip('can click on an option', () => {})

  it('can accept a specific direction', () => {
    render(
      <DropdownMenu
        isShowing={true}
        direction="top left"
        options={DropdownMenuOptions}
      />
    )
    expect(screen.getByTestId('dropdownMenu')).toHaveClass('top')
  })
})
