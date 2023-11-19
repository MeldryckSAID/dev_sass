import MyNewsletter from '../components/elements/MyNewsletter.vue'

export default {
  title: 'elements/MyNewsletter',
  component: MyNewsletter,
  argTypes: {
    title: {
      control: 'text'
    },
    paragraphe: {
      control: 'text'
    }
  }
}

export const Newsletter = {
  render: (args) => {
    return {
      components: {
        MyNewsletter
      },
      setup() {
        return { args }
      },
      template: `<MyNewsletter v-bind="args" />`
    }
  },
  args: {}
}
