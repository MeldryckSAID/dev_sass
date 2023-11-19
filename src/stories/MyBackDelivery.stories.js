import MyBackDelivery from '../components/elements/MyBackDelivery.vue'

export default {
  title: 'elements/MyBackDelivery',
  component: MyBackDelivery,
  argTypes: {
    text_Back: {
      control: 'text'
    }
  }
}

export const BackDelivery = {
  render: (args) => {
    return {
      components: {
        MyBackDelivery
      },
      setup() {
        return { args }
      },
      template: `<MyBackDelivery v-bind="args" />`
    }
  },
  args: {}
}
