import MyCard from '../components/elements/MyCard.vue'

export default {
  title: 'Card/Single-Card',
  component: MyCard,
  argTypes: {
    imageSRC: {
      control: 'text'
    },
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    buttonLabel: {
      control: 'text'
    },
    variant: {
      control: 'select',
      options: ['default', 'small']
    }
  }
}

export const Big_card = {
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
    name: 'basic',
    imageSRC: '/webp/ImgDelivery.webp'
  }
}

export const Small_card = {
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
    name: 'basic', 
    
       
  }
}
