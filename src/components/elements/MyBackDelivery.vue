<script setup>
defineProps({
  imageAlt: String,
  imageSrc: String,
  text_Back: String
})
</script>
<template>
  <div class="back_delivery" :class="className">
    <h3 class="text_Back">{{ text_Back }}</h3>
    <div class="elipse">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>
  </div>
</template>
<style lang="scss">
.back_delivery {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: $secondary-color;
  width: 270px;
  height: 63px;
  border-radius: 31.5px;
  padding: 0.5%;
  .text_Back {
    color: $primary-color;
    font-family: Montserrat;
    text-align: start;
    font-weight: 600;
  }
  .elipse {
    display: flex;
    justify-content: space-around;
    background-color: white;
    border-radius: 100%;
  }
}
</style>
