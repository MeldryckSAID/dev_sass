<script setup>
import { computed } from 'vue'
import IconArrowR from '../icons/IconArrowR.vue'
import IconArrowL from '../icons/IconArrowL.vue'
import IconMarket from '../icons/IconMarket.vue'
import IconSearch from '../icons/IconSearch.vue'
import IconCall from '../icons/IconCall.vue'
import IconClock from '../icons/IconClock.vue'
import IconLocalisation from '../icons/IconLocalisation.vue'
import IconFavori from '../icons/IconFavori.vue'
import IconMenuOpen from '../icons/IconMenuOpen.vue'
import IconMenuClose from '../icons/IconMenuClose.vue'
import IconNext from '../icons/IconNext.vue'
import IconPlay from '../icons/IconPlay.vue'

const props = defineProps({
  name: String,
  color: String,
  stroke: String,
  size: String,
  fill: String,
})
const getIcon = computed(() => {
  switch (props.name) {
  case 'Arrow Rigth':
    return IconArrowR
  case 'Market':
    return IconMarket
  case 'Arrow Left':
    return IconArrowL
  case 'Search':
    return IconSearch
  case 'Clock':
    return IconClock
  case 'Localisation':
    return IconLocalisation
  case 'Call':
    return IconCall
  case 'Favori':
    return IconFavori
  case 'Menu close':
    return IconMenuClose
  case 'Next':
    return IconNext
  case 'Menu open':
    return IconMenuOpen
  case 'Play':
    return IconPlay

  default:
    return IconArrowR
  }
})

const className = computed(() => ({
  ' -black': props.color === 'black',
  ' -primary': props.color === 'primary',
  ' -white': props.color === 'white',
  ' -secondary': props.color === 'secondary',
  ' -cnone': props.color === 'none',

  ' -sblack': props.stroke === 'black',
  ' -sprimary': props.stroke === 'primary',
  ' -swhite': props.stroke === 'white',
  ' -ssecondary': props.stroke === 'secondary',
  ' -ssans': props.stroke === 'base',


  ' -small': props.size === 'small',
  ' -regular': props.size === 'regular',
  ' -big': props.size === 'big',

  ' -fyellow': props.fill === 'yellow',
  ' -fblack': props.fill === 'black',
  ' -fsans': props.fill === 'base',
  ' -fprimary': props.fill === 'primary'
}))
</script>

<template>
  <i :class="className" class="icon">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  border-radius: 100%;
  box-shadow: 0 0 rem(5) 0 $gray;
  display: inline-flex;
  height: rem(50);
  justify-content: center;
  width: rem(50);

  //background
  &.-primary {
    background: #f48e28;
  }
  &.-secondary {
    background: #f5ddc4;
  }

  &.-white {
    background: #fff;
  }

  &.-black {
    background: #000;
  }
  &.-cnone {
    background: none;
    box-shadow: none;
  }

  //fill
  &-.fyellow {
    fill: yellow;
  }
  &-.fblack {
    fill: #000;
  }
  &-.fsans {
    fill: none;
  }
  &.-fprimary {
    background: #f48e28;
  }

  //stroke

  &.-sprimary {
    color: #f48e28;
  }
  &.-ssecondary {
    color: #f5ddc4;
  }

  &.-swhite {
    color: #fff;
  }

  &.-sblack {
    color: #000;
  }

  &.-ssans {
    color: none;
  }

  &.-small {
    svg {
      scale: 0.5;
    }
    height: rem(25);
    width: rem(25);
  }
  &.-regular {
    height: rem(50);
    width: rem(50);
  }
  &.-big {
    svg {
      scale: 1.5;
    }
    height: rem(100);
    width: rem(100);
  }
}
</style>
