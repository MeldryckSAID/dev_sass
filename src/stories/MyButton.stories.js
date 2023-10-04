import Mybutton from '../components/MyButton.vue'

export default {
  title: 'Elements/MyButton',
  component: Mybutton,
  argTypes: {
    href: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: ['regular', 'small']
    },
    variant: {
      control: 'select',
      options: ['default', 'rounded']
    },
    Icon: {
      control: 'boolean'
    }
  }
}

export const PrimaryButton = {
  render: (args) => {
    return {
      components: {
        Mybutton
      },
      setup() {
        return { args }
      },
      template: `<Mybutton v-bind="args">My link Button</Mybutton>`
    }
  },
  args: {
    size: 'regular',
    variant: 'default'
  }
}
export const SecondaryButton = {
  ...PrimaryButton,
  args: {
    size: 'small',
    variant: 'rounded'
  }
}
export const ThirdButton = {
  ...PrimaryButton,
  args: {
    size: 'small',
    variant: 'rounded',
    icon:'true'
  }
}
