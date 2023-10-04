import MyCard from '../components/elements/MyCard.vue'

export default {
  title: 'Card/Single-Card',
  component: MyCard,
  argTypes: {
    name: {
      control: 'select',
      options: [
        'wait',
      ]
    },
    
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        MyCard
      },
      setup() {
        return { args }
      },
      template: `<MyCard v-bind="args" />`
    }
  },
  args: {
    name: 'basic'
  }
}
