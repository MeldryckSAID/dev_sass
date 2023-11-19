import MyCardsMenu from '../components/elements/cards/MyCardsMenu.vue'

export default {
  title: 'Cards/Components/MyCardsMenu',
  component: MyCardsMenu
}

export const Cards__menu= {
  render: () => {
    return {
      components: {
        MyCardsMenu
      },
      template: `<MyCardsMenu />`
    }
  },
  args: []
}
