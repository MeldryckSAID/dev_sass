<script setup>
//a retenir nav>ul>li*4[href=#]{link}
import MyButton from '@/components/MyButton.vue'
import DefaultLayout from '@/components/layaouts/DefaultLayout.vue'
</script>

<template>
  <main>
    <DefaultLayout>
      <template v-slot:header>
        
      </template>
      <h1>Hello WORLDS</h1>
      <P>Page about</P>

      <template v-slot:aside>
        <nav>
          <ul>
            <li href="#">Nav aside 1</li>
            <li href="#">Nav aside 2</li>
            <li href="#">Nav aside 3</li>
          </ul>
        </nav>
      </template>

      <template v-slot:footer>
        <MyButton href="/test" Size="rounded" variant="small" content="footer">TEST</MyButton>
      </template>
    </DefaultLayout>
  </main>
</template>
