<script setup>
import { computed } from 'vue'
import MyButton from '../MyButton.vue'

//import WeCover from './webp/weCover.vue'
//import WeTable from './webp/WeTable.vue'
//import WeDelivery from './webp/WeDelivery.vue'

const props = defineProps({
  imageAlt: String,
  imageSrc: String,
  title: String,
  description: String,
  buttonLabel: String,
  variant: String
})

const className = computed(() => ({
  ' -small': props.variant === 'small'
}))
</script>
<template>
  <div class="card -small" :calss="className">
    <div class="card__image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>
    <div class="card__content">
      <h2 class="title" size="small">{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="card__button">
        <MyButton variant="rounded" size="small">{{ buttonLabel }}</MyButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.card {
  max-width: rem(350);
  border-radius: rem(20);
  border: rem(1) solid $gray;
  overflow: hidden;
  &__content {
    padding: rem(20) rem(10);
    > * + * {
      margin-top: rem(20);
    }
    h2 {
      font-family: $primary-font-familly;
      text-align: center;
    }

    p {
      text-align: center;
      font-family: $primary-font-familly;
    }
  }

  &__image {
    display: flex;
    justify-content: center;
    img {
      width: auto;
      padding: 3em;
    }
    background-color: none;
  }
  &__title {
    font-family: $primary-font-familly;
  }

  &__button {
    text-align: center;
  }

  &.-small {
    max-width: rem(200);
    background-color: red;
    border-radius: rem(0);
    border: rem(2) solid $gray;
    
  }
}
</style>
