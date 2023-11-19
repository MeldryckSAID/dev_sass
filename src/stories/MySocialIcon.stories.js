import MySocialIcon from '../components/elements/icons/resaux/MySocialIcon.vue'

export default {
  title: 'icons/MySocialIcon',
  component: MySocialIcon,
  argTypes: {
    name: {
      control: 'select',
      options: ['facebook', 'twitter', 'linkedin', 'instagram']
    }
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        MySocialIcon
      },
      setup() {
        return { args }
      },
      template: `<MySocialIcon v-bind="args"></MySocialIcon>`
    }
  },
  args: {
    name: 'facebook'
  }
}
