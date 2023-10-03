import MyIcon from '../components/elements/icons/MyIcon.vue'

export default {
  title: 'icons/MyIcon',
  component: MyIcon,
  argTypes: {
    name: {
      control: 'select',
      options: [
        'Arrow Rigth',
        'Arrow Left',
        'Market',
        'Search',
        'Clock',
        'Localisation',
        'Call',
        'Favori'
      ]
    },
    variant: {
      control: 'select',
      options: ['basic']
    },
    Size: {
      control: 'select',
      options: ['small', 'regular', 'big']
    }
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        MyIcon
      },
      setup() {
        return { args }
      },
      template: `<MyIcon v-bind="args" />`
    }
  },
  args: {
    name: 'basic'
  }
}
