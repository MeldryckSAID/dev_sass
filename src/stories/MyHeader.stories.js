import MyHeader from '../components/elements/MyHeader.vue'

export default {
  title: 'Layout/MyHeader',
  component: MyHeader,
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

export const Header = {
  render: (args) => {
    return {
      components: {
        MyHeader
      },
      setup() {
        return { args }
      },
      template: `<MyHeader v-bind="args" />`
    }
  },
  args: {
    
  }
}
