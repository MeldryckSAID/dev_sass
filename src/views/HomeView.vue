<script setup>
import MyHeader from '../components/elements/MyHeader.vue'
import MyFooter from '../components/layouts/MyFooter.vue'
import MyBackDelivery from '../components/elements/MyBackDelivery.vue'
import MyTitle from '../components/elements/Mytitle.vue'
import MyButton from '../components/MyButton.vue'
import MyCardsMenu from '../components/elements/cards/MyCardsMenu.vue'
import MyCards from '../components/elements/cards/MyCards.vue'
import MyCardsPresta from '../components/elements/cards/MyCardsPresta.vue'
import MyIcon from '../components/elements/icons/MyIcon.vue'
</script>

<template>
  <header>
    <MyHeader imageSrc="/public/logo.png" />
  </header>
  <section class="section__1">
    <div class="section_left">
      <MyBackDelivery text_Back="Bike Delivery" image-src="/public/livraison.png" />
      <div class="section__title">
        <MyTitle el="h2" size="xlarge">The Fastest</MyTitle>
        <MyTitle el="h2" size="xlarge">Delivery</MyTitle>
        <MyTitle el="h2" size="xlarge">In <span>Your City</span> </MyTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a
          vestibulum enim volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum.
        </p>
      </div>
      <div class="section__button">
        <MyButton variant="default" tcolor="white" color="primary">Order now</MyButton>
        <MyButton variant="default" iconl="true" tcolor="black" color="none"
          >Order Process</MyButton
        >
      </div>
    </div>
    <div class="section_rigth">
      <MyCardsMenu />
    </div>
  </section>

  <aside class="aside_part">
    <div class="aside__1">
      <MyIcon name="Clock" stroke="white" color="primary" />
      <MyTitle el="h5" size="medium" strong="strong">Today 10:00am - 10:00pm</MyTitle>
      <p>Working time</p>
    </div>
    <div class="aside__2">
      <MyIcon name="Localisation" stroke="white" color="primary" />
      <MyTitle el="h5" size="medium" strong="strong">Washington, D.C., DC,USA </MyTitle>
      <p>Our Location</p>
    </div>
    <div class="aside__3">
      <MyIcon name="Call" stroke="white" color="primary" />
      <MyTitle el="h5" size="medium" strong="strong">+0123 456 7891</MyTitle>
      <p>Phone Number</p>
    </div>
  </aside>

  <section class="section__2">
    <div class="section__title">
      <p>Product</p>
      <MyTitle el="h3" size="large">Most Popular Items</MyTitle>
    </div>
    <MyCards />
    <div class="section__button">
      <MyButton iconr="true" color="primary" variant="rounded" size="small" tcolor="white"
        >See More Product</MyButton
      >
    </div>
  </section>

  <section class="section__3">
    <div class="section__title">
      <p>Services</p>
      <MyTitle el="h3" size="large">Why Choose Our Favorite Food</MyTitle>
    </div>
    <MyCardsPresta />
  </section>

  <footer>
    <MyFooter/>
  </footer>
</template>

<style lang="scss">
p {
  font-family: Montserrat;
}
.section__1 {
  display: grid;
  padding: 5%;
  grid-template-columns: repeat(2, 1fr);
  p {
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
    gap: rem(20);
  }
  .section_left {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
.aside_part {
  display: flex;
  justify-content: space-around;
  .aside__1,
  .aside__2,
  .aside__3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  .aside__2 {
    border-left: 2px solid $gray;
    border-right: 2px solid $gray;
    padding-inline: 5%;
  }
}
.section__2 {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5%;
  padding-bottom: none;
  p {
    color: $primary-color;
  }
  .section__title {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10%;
  }
  .section__button {
    padding: 1%;
  }
}
.section__3 {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2%;

  .section__title {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10%;
    p {
      color: $primary-color;
    }
  }
  .section__button {
    padding: 1%;
  }
}
</style>
