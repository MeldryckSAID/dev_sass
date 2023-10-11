<script setup>
//import MyButton3 from '@/components/MyButton3.vue'
import { onMounted, ref, computed } from 'vue'
import axios from 'axios'
import MyBackgroundScroll from '../components/MyBackgroundScroll.vue'
//import MyButton from '@/components/MyButton.vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'

onMounted(async () => {
  recipes.value = await getRecipes()

  console.log(recipes.value)
})

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})
const recipes = ref([])

const getRecipes = async () => {
  const response = await client.get('/recipes')
  return response.data
}

const recipesNames = computed(() =>
  recipes.value.map((recipeItem) => {
    return recipeItem.recipe_name
  })
)
console.log(recipesNames.value)

const words = ['Spaghetti']

const name_spagutti = recipes.value.filter((recipes) => {
  return recipes.recipe_name.includes(words)
})
console.log(name_spagutti)

const hasGoalId = computed(() => {
  return recipes.value.some((item) => item.goal_id === 1)
})
console.log(hasGoalId)
</script>

<template>
  <!-- <MyButton > My button</MyButton>
  <MyButton3>Seconde version</MyButton3> -->
  <DefaultLayout>
    <template #header>
      <nav>
        <ul>
          <li><a href="/test">test</a></li>
          <li><a href="#">Nav link 2</a></li>
          <li><a href="#">Nav link 3</a></li>
        </ul>
      </nav>
      <div class="test">
        <h1>ON VAS TESTE LE AMEND</h1>
      </div>
    </template>

    <template #aside>
      <nav>
        <ul>
          <li><a href="#">Aside link 1</a></li>
          <li><a href="#">Aside link 2</a></li>
          <li><a href="#">Aside link 3</a></li>
        </ul>
        <!-- mettre son composant pour incorporer sa donné a la place du li ol un div  -->
        <div class="test">
          <ol>
            <li v-for="(recipes, index) in recipes" :key="index">{{ recipes.recipe_name }}</li>
          </ol>
        </div>
      </nav>
    </template>
    {{ recipes }}

    <MyBackgroundScroll />

    <template #footer> </template>
  </DefaultLayout>

  <!-- <MyButton size="small" href="/about">My Small Button</MyButton>
  <MyButton href="/about">My link Button</MyButton>
  <MyButton variant="rounded" >My rounded Button</MyButton> -->
  <p></p>
</template>

<style>
.test {
  color:orange;
  background-color: black;
  width: 5rem;
  margin: 10px;
}
</style>
