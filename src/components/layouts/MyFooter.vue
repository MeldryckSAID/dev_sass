<script setup>
import MyIcon from '../elements/icons/MyIcon.vue'
import MySocialIcon from '../elements/icons/resaux/MySocialIcon.vue'
</script>

<template>
  <div class="footer">
    <div class="footer__section1">
      <img src="../../../public/logo.png" alt="logo" />
      <div class="footer__section1-content">
        <p class="footer__link">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus
          odio sit malesuada in quis. Arcu tristique elementum viverra integer id.
        </p>
        <div class="footer__section1-content-icon">
          <MySocialIcon name="facebook"></MySocialIcon>
          <MySocialIcon name="twitter"></MySocialIcon>
          <MySocialIcon name="linkedin"></MySocialIcon>
          <MySocialIcon name="instagram"></MySocialIcon>
        </div>
      </div>
    </div>

    <div class="footer__section2">
      <h2 class="footer__Ltitle">Opening Restaurant</h2>
      <div class="footer__section2-content">
        <p class="footer__link">Sat-Wet: 09:00am-10:00PM</p>
        <p class="footer__link">Thursdayt: 09:00am-11:00PM</p>
        <p class="footer__link">Friday: 09:00am-8:00PM</p>
      </div>
    </div>

    <div class="footer__section3">
      <h2 class="footer__Ltitle">User Link</h2>
      <div class="footer__section3-content">
        <p class="footer__link">About Us</p>
        <p class="footer__link">Contact Us</p>
        <p class="footer__link">Order Delivery</p>
        <p class="footer__link">Payment & Tex</p>
        <p class="footer__link">Terms of Services</p>
      </div>
    </div>

    <div class="footer__section4">
      <h2 class="footer__Ltitle">Contact Us</h2>
      <div class="footer__section4-content">
        <p class="footer__link">1234 Country Club Ave</p>
        <p class="footer__link">NC 123456, London, UK</p>
        <p class="footer__link">+0123 456 7891</p>
        <div class="footer__section4-input">
          <input type="text" placeholder="Enter your email..." />
          <MyIcon name="Next" stroke="white" color="primary" size="regular" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  height: fit-content;
  padding: 60px 0;
  background: #fafaff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .footer__link {
    color: $gray;
    font-family: $primary-font-familly;
  }
  .footer__Ltitle {
    color: $black;
    font-family: $primary-font-familly;
    font-weight: 600;
  }

  &__section1 {
    width: rem(400);
    img {
      width: rem(150);
    }
    &-content {
      margin-top: rem(20);
      &-icon {
        margin-top: rem(20);
        display: flex;
        gap: rem(10);
        align-items: center;
      }
    }
  }
  &__section2 {
    &-content {
      margin-top: rem(40);
      > * {
        padding-top: rem(20);
      }
    }
  }
  &__section3 {
    &-content {
      margin-top: rem(40);
      > * {
        padding-top: rem(20);
      }
    }
  }
  &__section4 {
    &-content {
      margin-top: rem(40);
      > * {
        padding-top: rem(20);
      }
    }

    &-input {
      margin-top: rem(30);
      padding: rem(10);
      width: rem(287);
      background: $white;
      border-radius: rem(32.5);
      display: flex;
      justify-content: center;
      align-items: center;
      ::placeholder {
        opacity: 0.3;
      }
      :focus {
        outline: none;
      }
      input {
        flex: 1;
        margin: 0 rem(20);
        border: none;
      }
    }
  }
}
</style>
