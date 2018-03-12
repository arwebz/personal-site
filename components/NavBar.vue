<template lang="pug">
  .navbar.is-light(role="navigation" aria-label="main navigation")
    .navbar-brand
      a.navbar-item(to="/") Martin Fracker, Jr.
      .navbar-burger(@click="clickBurger" :class="{ 'is-active': isMobileMenuActive }")
        span
        span
        span
    .navbar-menu(:class="{ 'is-active': isMobileMenuActive }")
      .navbar-start
        nuxt-link.navbar-item(to="/" :exact="true") Home
        nuxt-link.navbar-item(to="/projects") Projects
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link Resume
          .navbar-dropdown.is-info
            a.navbar-item(href="https://github.com/Towerism/resume/raw/master/fracker-martin-resume.pdf") PDF
            a.navbar-item(href="https://github.com/Towerism/resume/raw/master/fracker-martin-resume.txt" target="_blank") Text
        a.navbar-item(href="http://www.github.com/towerism" target="_blank") Github
      .navbar-end
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
