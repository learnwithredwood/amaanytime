import { Form } from '@redwoodjs/forms'
import { render, screen } from '@redwoodjs/testing/web'

import { AmaTextField } from './AmaTextField'
import {
  minimum,
  website,
  withDefaultValue,
  placeholder,
  username,
} from './AmaTextField.mocks'

// testing validation is handled at the form level
// But, for reference: https://redwoodjs.com/docs/testing#testing-the-form

describe('AmaTextField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Form>
          <AmaTextField {...minimum} />
        </Form>
      )
    }).not.toThrow()
  })

  // actual string validation is handled through TypeScript, this is just to
  // make sure that the attribute is being applied correctly
  it('can change the input type', () => {
    render(
      <Form>
        <AmaTextField {...website} type="url" />
      </Form>
    )
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'url')
  })

  it('can handle a default value', () => {
    render(
      <Form>
        <AmaTextField {...withDefaultValue} />
      </Form>
    )
    expect(screen.getByTestId('input')).toHaveValue(
      withDefaultValue.defaultValue
    )
  })
  it('can handle a placeholder value', () => {
    render(
      <Form>
        <AmaTextField {...placeholder} />
      </Form>
    )
    expect(screen.getByTestId('input')).toHaveAttribute(
      'placeholder',
      placeholder.placeholder
    )
  })
  it('can take a custom class name', () => {
    render(
      <Form>
        <AmaTextField {...username} />
      </Form>
    )
    expect(screen.getByTestId('inputWrapper')).toHaveClass(username.className)
  })
})
