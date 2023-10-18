<script setup>
import { computed } from 'vue'
import MyIcon from '@/components/elements/icons/MyIcon.vue'
const props = defineProps({
  href: String,
  size: String,
  variant: String,
  color: String,
  iconr: Boolean,
  iconl: Boolean,
  tcolor: String
})

const className = computed(() => ({
  ' -rounded': props.variant === 'rounded',
  ' -small': props.size === 'small',
  ' -iconr': props.iconr,
  ' -iconl': props.iconl,

  //color
  ' -sprimary': props.color === 'primary',
  ' -swhite': props.color === 'white',
  ' -ssecondary': props.color === 'secondary',
  ' -slinear': props.color === 'linear',
  ' -snone': props.color === 'none',

  //text
  ' -tblack': props.tcolor === 'black',
  ' -twhite': props.tcolor === 'white'
}))
</script>
<template>
  <a v-if="href" :href="href" class="button tcolor" :class="className">
    <MyIcon v-if="iconl" name="Play" stroke="primary" color="white" /><slot class="tcolor"></slot>
    <MyIcon v-if="iconr" name="Next" stroke="primary" color="white" />
  </a>
  <button v-else class="button tcolor" :class="className">
    <MyIcon v-if="iconl" name="Play" stroke="primary" color="white" />
    <slot ></slot><MyIcon v-if="iconr" name="Next" stroke="primary" color="white" />
  </button>
</template>

<style lang="scss" scoped>
.button {
  &.tcolor {
    &.-tblack {
      color: $black;
    }
    &.-twhite {
      color: $white;
    }
  }
  border: none;
  border-radius: rem(15);
  box-shadow: 0px rem(4) rem(4) rgba(0, 0, 0, 0.25);
  display: inline-block;

  font-family: $primary-font-familly;
  font-size: $regular-font-size;
  font-weight: 600;
  padding: rem(43) rem(67);
  text-decoration: none;
  word-wrap: break-word;

  &.-rounded {
    border-radius: rem(37);
    font-weight: 500;
    padding: rem(26) rem(64);
  }
  &.-small {
    font-size: $small-font-size;
    padding: rem(14) rem(29);
    font-weight: 400;
  }
  &.-iconr {
    padding-left: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &.-iconl {
    padding-left: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &.-sprimary {
    background-color: $primary-color;
  }
  &.-ssecondary {
    background-color: $secondary-color;
  }

  &.-swhite {
    background-color: $white;
  }

  &.-slinear {
    background: linear-gradient(180deg, $secondary-color 0%, $primary-color 100%);
  }
  &.-snone {
    background: none;
  }
}
</style>
