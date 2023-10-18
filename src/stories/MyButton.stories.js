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
    color: {
      control: 'select',
      options: ['black', 'primary', 'secondary', 'white', 'linear', 'none']
    },
    Iconr: {
      control: 'boolean'
    },
    Iconl: {
      control: 'boolean'
    },
    tcolor: {
      control: 'select',
      options: ['black', 'white']
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
    icon: 'true'
  }
}
export const FourdButton = {
  ...PrimaryButton,
  args: {
    size: 'default',
    variant: 'rounded',
    iconl: 'true'
    
  }
}
