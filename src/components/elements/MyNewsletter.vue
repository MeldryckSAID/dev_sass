<script setup>
import { computed } from 'vue'
import MyButton from '../MyButton.vue'

const props = defineProps({
  imageAlt: String,
  imageSrc: String,
  title: String,
  paragraphe: String
})

const className = computed(() => ({
  ' -small': props.text_Back === 'small'
}))
</script>
<template>
  <div class="Newletter" :class="className">
    <img :src="imageSrc" :alt="imageAlt" />

    <div class="Newletter__information">
      <h3 class="Newletter__title">{{ title }}</h3>
      <p class="Newletter__text">{{ paragraphe }}</p>
      <div class="Newletter__form">
        <input placeholder="Type your email....." type="text" />
        <MyButton variant="rounded">SUBCRIBE</MyButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.Newletter {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1560px;
  height: 369px;
  border-radius: 31.5px;
  background-color: $black;
  color: $white;
  position: relative;
  align-items: center;
  img {
    height: 170%;
    aspect-ratio: 1/1;
    object-fit: contain;
  }
  &__information {
    h3 {
      font-family: Montserrat;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      width: 532px;
      height: 75px;
    }

    .Newletter__form {
      display: flex;
      justify-content: space-evenly;
      background-color: $white;
      border-radius: 21.5px;
      padding-left: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      input {
        border: none !important;
        font-size: $regular-font-size;
      }
      ::placeholder {
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        color: black;
      }
    }
  }
}
</style>
