<template>
  <div class="p-recipe-view">
    <h1>C'est bon tkt</h1>

    recette avec l'id : {{ recipe.recipe_name }}
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { client } from '../utils/axios.js'

onMounted(async () => {
  recipe.value = await getRecipe()
})

const recipe = ref({})

const getRecipe = async () => {
  const response = await client.get(`/recipes/${route.params.id}`)
  return response.data
}

const route = useRoute()
console.log(route)
</script>

<style lang="scss"></style>
