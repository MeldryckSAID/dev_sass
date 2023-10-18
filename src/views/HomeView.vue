<script setup>
import MyHeader from '../components/elements/MyHeader.vue'
import MyBackDelivery from '../components/elements/MyBackDelivery.vue'
import MyTitle from '../components/elements/Mytitle.vue'
import MyButton from '../components/MyButton.vue'
</script>

<template>
  <MyHeader imageSrc="/public/logo.png" />

  <section class="section__1">
    <div class="section_left">
      <MyBackDelivery text_Back="Bike Delivery" image-src="/public/livraison.png" />
      <div class="section__title">
        <MyTitle el="h1" size="xlarge">The Fastest</MyTitle>
        <MyTitle el="h1" size="xlarge">Delivery</MyTitle>
        <MyTitle el="h1" size="xlarge">In <span>Your City</span> </MyTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a
          vestibulum enim volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum.
        </p>
      </div>
      <div class="section__button">
        <MyButton variant="default" color="primary">Order now</MyButton>
        <MyButton variant="default" iconl="true" color="white">Order Process</MyButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section__1 {
  p {
    width: 622px;
    height: 76px;
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .section__button {
    display: flex;
    flex-direction: row;
  }
}
</style>
