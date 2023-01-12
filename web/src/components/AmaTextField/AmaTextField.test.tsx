import { Form } from '@redwoodjs/forms'
import { render, screen } from '@redwoodjs/testing/web'

import { AmaTextField, IInputProps } from './AmaTextField'

const renderComponent = (props: IInputProps, formProps = {}) =>
  render(
    <Form {...formProps}>
      <AmaTextField {...props} />
    </Form>
  )

describe('AmaTextField', () => {
  it('can change the input type', () => {
    renderComponent({
      name: 'foo',
      type: 'password',
    })
    expect(screen.getByTestId('password-field-foo')).toBeInTheDocument()
  })

  it('shows a label if you give it a label prop', () => {
    renderComponent({
      name: 'foobar',
    })

    expect(screen.queryByTestId('input-label-foobar')).not.toBeInTheDocument()

    renderComponent({
      name: 'foo',
      label: 'bar',
    })
    expect(screen.getByTestId('input-label-foo')).toBeInTheDocument()
  })

  it('shows the password label when type is password and there s label', () => {
    render(
      <Form>
        <AmaTextField name="foo" type="password" label="bar" />
      </Form>
    )
    renderComponent({
      name: 'foo',
    })
    expect(screen.getByTestId('password-label-foo')).toBeInTheDocument()
  })
})
