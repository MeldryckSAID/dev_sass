<script setup>
import MyCard from '../../../components/elements/MyCard.vue'
import { reactive } from 'vue'

const response = [
  {
    id: '1',
    title: 'Burger',
    imageSrc: '/menu/burger.png',
    imageAlt: 'burger',
    icon: true,
    variant: 'menu',
    prices: true,
    price: '5.00',
    description: 'Mushroom Sauce'
  },

  {
    id: '2',
    title: 'Food Combo',
    imageSrc: '/menu/combo.png',
    imageAlt: 'Food Combo',
    icon: true,
    variant: 'menu',
    prices: true,
    price: '9.00',
    description: 'Mushroom Sauce'
  },
  {
    id: '3',

    title: 'Pizza',
    imageSrc: '/menu/pizza.png',
    imageAlt: 'Salade',
    icon: true,
    variant: 'menu',
    prices: true,
    price: '10.00',
    description: 'Mushroom Sauce'
  },
  {
    id: '4',
    title: 'Gyro Sandwhic',
    imageSrc: '/menu/cake.png',
    imageAlt: 'cake',
    icon: true,
    variant: 'menu',
    prices: true,
    price: '15.00',
    description: 'Mushroom Sauce'
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
  row-gap: rem(100);
  column-gap: rem(20);
  grid-template-columns: repeat(2, 1fr);
 
}
</style>
