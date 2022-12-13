import { PageHeading, IPageHeading } from './PageHeading'

const Template = (args: IPageHeading) => <PageHeading {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Something',
}

export const WithActionButtons = Template.bind({})
WithActionButtons.args = {
  title: 'Something',
  isActionsShowing: true,
}

export default {
  title: 'Components/Page Heading',
  component: PageHeading,
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true },
      description: 'page title',
      defaultValue: '',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    isActionsShowing: {
      name: 'isActionsShowing',
      type: { name: 'boolean', required: true },
      description:
        'determines whether the action buttons should be displayed or not',
      defaultValue: '',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: '' },
      },
    },
  },
}
