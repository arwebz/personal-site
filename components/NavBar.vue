<template lang="pug">
  .container
    .navbar(role="navigation" aria-label="main navigation")
      .navbar-brand
        a.navbar-item(to="/") Martin Fracker, Jr.
        a.navbar-item(href="http://www.github.com/towerism" target="_blank")
          b-icon(pack="fa" icon="github")
        a.navbar-item(href="http://www.linkedin.com/in/martinfrackerjr" target="_blank")
          b-icon(pack="fa" icon="linkedin")
        a.navbar-item(href="https://github.com/Towerism/resume/raw/master/fracker-martin-resume.pdf")
          b-icon(pack="fa" icon="file-text-o")

        .navbar-burger(@click="clickBurger" :class="{ 'is-active': isMobileMenuActive }")
          span
          span
          span
      .navbar-menu(:class="{ 'is-active': isMobileMenuActive }")
        .navbar-start
        .navbar-end
          nuxt-link.navbar-item(to="/" :exact="true") Home
          nuxt-link.navbar-item(to="/projects") Projects
</template>

<script>

export default {
  data () {
    return {
      isMobileMenuActive: false
    }
  },
  methods: {
    clickBurger () {
      this.isMobileMenuActive = !this.isMobileMenuActive
    }
  }
}
</script>
