<template>
  <header>
    <div class="Top__header" :class="className">
      <div class="header__logo">
        <img :src="imageSrc" :alt="imageAlt" />
      </div>
      <div class="header__nav">
        <nav>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Service</li>
            <li>Shope</li>
          </ul>
        </nav>
      </div>
      <div class="header__schearbar">
        <MyIcon name="Search" />
        <MyIcon name="Market" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import MyIcon from '../elements/icons/MyIcon.vue'
const props = defineProps({
  imageAlt: String,
  imageSrc: String
})
const className = computed(() => ({
  ' -smart': props.size === 'smartphone',
  ' -device': props.size === 'destop',

  ' -ligth': props.theme === 'ligthmode',
  ' -darck': props.theme === 'darckmode'
}))
</script>

<style lang="scss">
.Top__header {
  background-color: red;
  display: flex;
  justify-content: space-around;

  .header__nav {
    background-color: aqua;

    ul {
      list-style: none;
      display: flex;
    }
    li {
      display: inline;
    }
  }
  .header__schearbar {
    border-radius: 10px;
    opacity: 0.3;
    background: var(--White, #fff);
    box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.15);
  }
}
</style>
