import { Form } from '@redwoodjs/forms'
import { render, screen } from '@redwoodjs/testing/web'

import { AmaTextarea } from './AmaTextarea'

// testing validation is handled at the form level
// But, for reference: https://redwoodjs.com/docs/testing#testing-the-form

describe('AmaTextField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Form>
          <AmaTextarea label={'Answer'} name={'answer'} />
        </Form>
      )
    }).not.toThrow()
  })

  it('shows a label', () => {
    render(
      <Form>
        <AmaTextarea label={'Answer'} name={'answer'} />
      </Form>
    )
    expect(screen.getByTestId('textareaField')).toHaveTextContent('Answer')
  })
})
