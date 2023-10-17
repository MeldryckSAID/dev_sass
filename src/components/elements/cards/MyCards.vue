<script setup>
import MyCard from '../../../components/elements/MyCard.vue'
import { reactive } from 'vue'

const response = [
  {
    id: '1',
    title: 'Gyro Sandwhic',
    imageSrc: '/recette/salade.png',
    imageAlt: 'Salade',
    buttonLabel: 'Add To Cart',
    variant: 'recette',
    favori: true,
    btn: true,
    prices: true,
    price: '15.00',
    note: '5',
    notes: true
  },

  {
    id: '2',
    title: 'Enchilade',
    imageSrc: '/recette/enchilade.png',
    imageAlt: 'Image de Enchilade',
    buttonLabel: 'Add To cart',
    variant: 'recette',
    favori: true,
    btn: true,
    prices: true,
    price: '20.00',
    note: '5',
    notes: true
  },
  {
    id: '3',
    title: 'Green Beans',
    imageSrc: '/recette/bean.png',
    imageAlt: 'Image de Green Beans',
    buttonLabel: 'Add To cart',
    variant: 'recette',
    favori: true,
    btn: true,
    prices: true,
    price: '1.00',
    note: '4.9',
    notes: true
  },
  {
    id: '4',
    title: 'Pizza',
    imageSrc: '/recette/pizza.png',
    imageAlt: 'Image de pizza',
    buttonLabel: 'Add To cart',
    variant: 'recette',
    favori: true,
    btn: true,
    prices: true,
    price: '18.00',
    note: '5',
    notes: true
  },
  {
    id: '5',
    title: 'Chicken Pot Pie',
    imageSrc: '/recette/chiken.png',
    imageAlt: 'Image Chicken Pot Pie',
    buttonLabel: 'Add To cart',
    variant: 'recette',
    favori: true,
    btn: true,
    prices: true,
    price: '25.00',
    note: '4.9',
    notes: true
  },
  {
    id: '5',
    title: 'Green Salad',
    imageSrc: '/recette/bol.png',
    imageAlt: 'Image Green Salad',
    buttonLabel: 'Add To cart',
    variant: 'recette',
    favori: true,
    btn: true,
    prices: true,
    price: '15.00',
    note: '4.9',
    notes: true
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
  gap: rem(20);
  grid-template-columns: repeat(3, 1fr);
}
</style>
