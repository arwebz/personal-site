<template lang="pug">
  div
    page-header
      div(slot="header")
        nav-bar
    div
      nuxt
    site-footer
</template>

<script>
import PageHeader from '~/components/PageHeader'
import SiteFooter from '~/components/SiteFooter'
import NavBar from '~/components/NavBar'
export default {
  components: {
    PageHeader,
    SiteFooter,
    NavBar
  }
}
</script>

<style scoped>
</style>
