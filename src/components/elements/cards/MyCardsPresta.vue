<script setup>
import MyCard from '../../../components/elements/MyCard.vue'
import { reactive } from 'vue'

const response = [
  {
    id: '1',

    imageSrc: '/ImgDelivery.webp',
    imageAlt: 'burger',
    variant: 'presta',
    title: 'Fast Delivery',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.'
  },

  {
    id: '2',
    imageSrc: '/ImgCover.webp',
    imageAlt: 'burger',
    variant: 'presta',
    title: 'Healthy Food',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.'
  },
  {
    id: '3',
    imageSrc: '/ImgTable.webp',
    imageAlt: 'burger',
    variant: 'presta',
    title: 'Qualityfull Food',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.'
  }
]

const cards = reactive(response)
</script>

<template>
  <div class="cards">
    <MyCard v-for="card in cards" :key="card.id" v-bind="card" />
  </div>
</template>

<style lang="scss" scoped>
.cards {
  display: grid;
  gap: rem(10);
  grid-template-columns: repeat(3, 1fr);
}
</style>
