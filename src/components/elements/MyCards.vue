<script setup>
import MyCard from './MyCard.vue'
import { reactive } from 'vue'

const response = [
  {
    id: '1',
    description: 'Description de la card',
    title: '100% Gratuit',
    imageSrc: '/salade.png',
    imageAlt: 'Image de chat',
    buttonLabel: 'Bouton de la card',
    variant: 'recette',
    favori: true,
    btn: true,
    prices: true,
    price: '15.00',
    note: '5',
    notes: true
  },

  {
    id: '3',
    description: 'Description de la card',
    title: 'Retours de cochhon',
    imageSrc: '/salade.png',
    imageAlt: 'Image de chat',
    buttonLabel: 'Bouton de la card',
    variant: 'recette',
    favori: true,
    btn: true,
    prices: true,
    price: '15.00',
    note: '4.9',
    notes: true
  },
  {
    id: '2',
    description: 'Description de la card',
    title: 'Retours gratuits',
    imageSrc: '/salade.png',
    imageAlt: 'Image de chat',
    buttonLabel: 'Bouton de la card',
    variant: 'recette',
    favori: true,
    btn: true,
    prices: true,
    price: '15.00',
    note: '8',
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
