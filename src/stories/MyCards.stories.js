import MyCards from '../components/elements/cards/MyCards.vue'

export default {
  title: 'Cards/Components/MyCards',
  component: MyCards
}

export const Cards = {
  render: () => {
    return {
      components: {
        MyCards
      },
      template: `<MyCards />`
    }
  },
  args: [
  
  ]
}

