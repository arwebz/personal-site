<template lang="pug">
  div
    nav-bar
    b-container.main
      nuxt
</template>

<script>
import NavBar from '~/components/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
.main {
  padding-top: 15px;
}
</style>
