<script setup>
import MyIcon from './icons/MyIcon.vue'

defineProps({
  imageAlt: String,
  imageSrc: String,
  people: String,
  grade: String,
  avis: String
})
</script>
<template>
  <div class="slide">
    <div class="slide__outside">
      <MyIcon
        class="slide__icon__left"
        name="Arrow Left"
        color="primary"
        stroke="white"
        size="small"
      />
      <div class="slide__inside">
        <div class="slide__speaker">
          <img :src="imageSrc" :alt="imageAlt" />
          <div class="slide__information">
            <h3>{{ people }}</h3>
            <h4>{{ grade }}</h4>
          </div>
        </div>
        <p class="people__avis">{{ avis }}</p>
      </div>
      <MyIcon
        class="slide__icon__rigth"
        name="Arrow Rigth"
        color="primary"
        stroke="white"
        size="small"
      />
    </div>
  </div>
</template>
<style lang="scss">
.slide {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 30px;
  border-bottom: 1px solid black;
  
  width: 723px;
  height: 445px;

  &__inside {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      text-align: center;
      color: #000;
      font-family: Montserrat;
    }
    .slide__speaker {
      display: flex;
      justify-content: center;
      padding: 20px;
      h3 {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 700;
      }
      h4 {
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 400;
      }
      img {
        border-radius: 60%;
        height: 60%;
      }
    }
  }

  &__outside {
    position: relative;

    .slide__icon__left {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .slide__icon__rigth {
      transform: translate(50%, -50%);
      position: absolute;
      right: 0;
      top: 50%;
    }
  }
}
</style>
