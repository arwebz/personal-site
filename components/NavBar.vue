<template lang="pug">
  b-navbar(toggleable="md" type="light" variant="light")
    b-navbar-brand(href="javascript:void(0)") Martin Fracker, Jr.
    b-nav-toggle(target="nav_collapse")
    b-collapse(is-nav id="nav_collapse")
      b-nav(is-nav-bar)
        b-nav-item(to="/" :exact="true") Home
        b-nav-item(to="/projects") Projects
        responsive-nav-dropdown(text="Resume")
          a(href="https://github.com/Towerism/resume/raw/master/fracker-martin-resume.pdf") PDF
          a(href="https://github.com/Towerism/resume/raw/master/fracker-martin-resume.txt") Text
        b-nav-item(href="http://www.github.com/towerism") Github
</template>

<script>
import ResponsiveNavDropdown from './ResponsiveNavDropdown'

export default {
  components: {
    ResponsiveNavDropdown
  }
}
</script>


<style lang="css" scoped>
  .dropdown-toggle {
    cursor: pointer;
  }
  .mobile-resume-link {
    padding-left: 25px;
  }
  .dropdown-content {
    height: auto;
    transition: max-height .5s;
    overflow: hidden;
  }
  .hidden-dropdown-content {
    max-height: 0;
  }
</style>
