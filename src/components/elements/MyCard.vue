<script setup>
import { computed } from 'vue'
import MyButton from '../MyButton.vue'
import MyIcon from '../elements/icons/MyIcon.vue'

const props = defineProps({
  imageAlt: String,
  imageSrc: String,
  title: String,
  description: String,
  price: String,
  buttonLabel: String,
  variant: String,
  icon: Boolean,
  favori: Boolean,
  btn: Boolean,
  prices: Boolean,
  notes: Boolean,
  note: String
})

const className = computed(() => ({
  ' -small': props.variant === 'small',
  ' -recette': props.variant === 'recette'
}))
</script>
<template>
  <div class="card" :class="className">
    <div class="card__image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>
    <div class="card__content">
      <div class="hfavori">
        <h2 class="title" size="small">{{ title }}</h2>
        <div class="like">
          <MyIcon v-if="favori" name="Favori" stroke="primary" />
          <p class="note" v-if="notes">${{ note }}</p>
        </div>
      </div>
      <p>{{ description }}</p>
      <div class="card__button">
        <MyButton v-if="btn" variant="rounded" size="small">{{ buttonLabel }}</MyButton>
        <p class="dollar" v-if="prices">${{ price }}</p>
      </div>
      <div class="card__icon">
        <MyIcon v-if="icon" name="Arrow Rigth" color="black" stroke="white" />
        <MyIcon v-if="icon" name="Arrow Left" color="white" stroke="black" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.card {
  max-width: rem(450);
  border-radius: rem(30);
  border: rem(1) solid ;

  position: relative;
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

  .dollar::first-letter {
    color: red;
  }

  &__image {
    display: flex;
    justify-content: center;
    background-color: none;
    padding: none;
  }
  &__title {
    font-family: $primary-font-familly;
  }

  &__button {
    text-align: center;
  }
  &__icon {
    display: flex;
    justify-content: space-around;
  }

  &.-small {
    max-width: rem(258);
    border-radius: rem(30);
    border: rem(2) solid $gray;
    height: 367px;
    .card__image {
      img {
        width: 90%;
        padding: 0em;
      }
    }
    .card__icon {
      position: absolute;
      bottom: 0;
      left: rem(-15);
      transform: translate(50%, 80%);

      gap: 50px;
    }
  }
  &.-recette {
    max-width: rem(485);
    border-radius: rem(30);
    border: rem(2) solid $gray;
    height: rem(485);

    .hfavori {
      display: flex;
      justify-content: space-between;
      .like {
        display: flex;
        gap: 15px;
      }
    }
    .dollar {
      color: black;
      font-weight: 700;
      text-align: right;
    }
    h2 {
      font-family: $primary-font-familly;
      text-align: left;
    }

    p {
      text-align: left;
      font-family: $primary-font-familly;
    }
    .card__image {
      img {
        width: 100%;
        padding: 0em;
        border-top-right-radius: rem(30);
        border-top-left-radius: rem(30);
      }
    }
    .card__button {
      display: flex;

      justify-content: space-between;
    }
  }
}
</style>
