import MyCard from '../components/elements/MyCard.vue'

export default {
  title: 'elements/Card/Single-Card',
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
    price: {
      control: 'text'
    },
    prices: {
      control: 'boolean'
    },
    buttonLabel: {
      control: 'text'
    },
    variant: {
      control: 'select',
      options: ['presta', 'menu', 'recette']
    },
    Icon: {
      control: 'boolean'
    },
    favori: {
      control: 'boolean'
    },
    btn: {
      control: 'boolean'
    },
    note: {
      control: 'text'
    },
    notes: {
      control: 'boolean'
    }
  }
}

export const Card_prestation = {
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
    imageSRC: '/ImgDelivery.webp',
    btn: false
  }
}

export const Menu_card = {
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
    variant: 'small',
    prices: true,
    icon: true,
    imageSRC: '/burger.png'
  }
}
export const Card_recette = {
  ...MyCard,
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
    variant: 'recette',
    btn: 'true',
    imageSRC: '/salade.png',
    prices: true,
    favori: true,
    notes: true
  }
}
