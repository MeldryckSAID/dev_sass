import MyFooter from '../components/layouts/MyFooter.vue'

export default {
  title: 'Layout/MyFooter',
  component: MyFooter,
  argTypes: {
    theme: {
      control: 'select',
      options: ['ligthmode', 'darckmode']
    },
    size: {
      control: 'select',
      options: ['destop', 'smartphone']
    }
  }
}

export const Footer = {
  render: (args) => {
    return {
      components: {
        MyFooter
      },
      setup() {
        return { args }
      },
      template: `<MyFooter v-bind="args" />`
    }
  },
  args: {
    
  }
}
