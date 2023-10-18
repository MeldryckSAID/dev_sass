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
        'Favori',
        'Next',
        'Menu close',
        'Menu open',
        'Play'
      ]
    },
    color: {
      control: 'select',
      options: ['base', 'primary', 'secondary', 'black', 'white', 'none']
    },
    stroke: {
      control: 'select',
      options: ['base', 'primary', 'secondary', 'black', 'white']
    },
    size: {
      control: 'select',
      options: ['small', 'regular', 'big']
    },
    fill: {
      control: 'select',
      options: ['base', 'yellow', 'black', 'primary']
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
