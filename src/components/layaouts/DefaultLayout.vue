<template>
  <main class="layout">
    <header class="layout__header">
      <slot name="header"></slot>
    </header>

    <aside class="layout__aside">
      <slot name="aside"></slot>
    </aside>
    <article class="layout__article">
      <slot></slot>
    </article>

    <footer class="layout__footer">
      <slot name="footer"></slot>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template:
    'header'
    'article'
    'aside'
    'footer';

  min-height: 100vh;

  @include medium-up {
    grid-template:
      'header header header'
      'aside article article'
      'footer footer footer';
  }
 
  &__aside {
    background: yellow;
    grid-area: aside;
  }
  &__article {
    background: yellowgreen;
    grid-area: article;
  }
  &__footer {
    background: $primary-color;
    grid-area: footer;
  }
  &__header {
    background: $primary-color;
    grid-area: header;
  }
}
</style>
