import { Form } from '@redwoodjs/forms'

import { AmaTextarea, AmaTextareaProps } from './AmaTextarea'

const Template = (args: AmaTextareaProps) => (
  <Form>
    <AmaTextarea {...args} />
  </Form>
)

export const Default = Template.bind({})
Default.args = {
  name: 'question',
  defaultValue: '',
  label: '',
  required: true,
  validation: { required: true },
}

export default { title: 'Components/AmaTextField' }
