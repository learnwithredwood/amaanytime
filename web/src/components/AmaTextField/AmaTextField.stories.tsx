import { Form } from '@redwoodjs/forms'

import { AmaTextField, AmaTextFieldProps } from './AmaTextField'
import {
  minimum,
  placeholder,
  username,
  website,
  withDefaultValue,
} from './AmaTextField.mocks'

const Template = (args: AmaTextFieldProps) => (
  <Form>
    <AmaTextField {...args} />
  </Form>
)

export const Minimum = Template.bind({})
Minimum.args = { ...minimum }

export const Username = Template.bind({})
Username.args = { ...username }

export const WithDefaultValue = Template.bind({})
WithDefaultValue.args = { ...withDefaultValue }

export const Placeholder = Template.bind({})
Placeholder.args = { ...placeholder }

export const UrlType = Template.bind({})
UrlType.args = { ...website }

export default { title: 'Components/AmaTextField' }
