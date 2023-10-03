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

const props = defineProps({
  name: String
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

    default:
      return IconTooling
  }
})
</script>

<template>
  <i class="icon">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  background: $white;
  border-radius: 100%;
  box-shadow: 0 0 rem(5) 0 $gray;
  display: inline-flex;
  height: rem(50);
  justify-content: center;
  width: rem(50);
}
</style>
