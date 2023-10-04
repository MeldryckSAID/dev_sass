<script setup>
import MyButton3 from '@/components/MyButton3.vue'
import Mycard from '../components/elements/MyCard.vue'
import MyBackgroundScroll from '../components/MyBackgroundScroll.vue'
import MyButton from '@/components/MyButton.vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
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
      </nav>
      <Mycard
        title="JOOOORDAAANN!!!!"
        description="T'es mort"
        buttonLabel="K.O"
        imageSrc="/dodo.jpeg"
      ></Mycard>
    </template>

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
  color: aqua;
  background-color: black;
  width: 5rem;
}
</style>
