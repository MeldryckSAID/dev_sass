import MyCardsPresta from '../components/elements/cards/MyCardsPresta.vue'

export default {
  title: 'Cards/Components/MyCardsPresta',
  component: MyCardsPresta
}

export const Cards__menu = {
  render: () => {
    return {
      components: {
        MyCardsPresta
      },
      template: `<MyCardsPresta />`
    }
  },
  args: []
}
