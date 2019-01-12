<template lang="pug">
  #layout
    nav.navbar.is-dark(role="navigation" aria-label="main navigation")
      .container
        .navbar-brand
          nav-link.navbar-item(:to="{ name: 'home' }" :inactive="true")
            | {{ $static.metaData.siteName }}
          a.navbar-burger.burger(
            role="button"
            aria-label="menu"
            aria-expanded="false"
            @click="clickBurger"
            :class="{ 'is-active': isMobileMenuActive }"
          )
            span(aria-hidden="true")
            span(aria-hidden="true")
            span(aria-hidden="true")
        .navbar-menu(:class="{ 'is-active': isMobileMenuActive }")
          .navbar-start
          .navbar-end
            nav-link.navbar-item(:to="{ name: 'home' }" :exact="true") Home
            nav-link.navbar-item(:to="{ name: 'projects' }") Projects
    slot
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import NavLink from "~/components/NavLink";

export default {
  components: {
    NavLink
  },
  data() {
    return {
      isMobileMenuActive: false
    };
  },
  methods: {
    clickBurger() {
      this.isMobileMenuActive = !this.isMobileMenuActive;
    }
  }
};
</script>
