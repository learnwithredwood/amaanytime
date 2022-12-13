import { Form } from '@redwoodjs/forms'

import { Toggle } from './Toggle'

const Template = (args) => (
  <Form>
    <Toggle {...args} />
  </Form>
)

export const Primary = Template.bind({})
Primary.args = {
  name: 'privacy',
  checked: false,
  value: false,
}

export default { title: 'Components/Toggle', component: Toggle }
