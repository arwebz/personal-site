<template lang="pug">
  div
    nav-bar
    div
      nuxt
    site-footer
</template>

<script>
import SiteFooter from '~/components/SiteFooter'
import NavBar from '~/components/NavBar'
export default {
  components: {
    SiteFooter,
    NavBar
  }
}
</script>

<style scoped>
</style>
