<template lang="pug">
  header#header
    h1 {{$static.metaData.siteName}}
    ClientOnly
      nav
        ul
          li
            g-link(to='/#intro' v-smooth-scroll) Intro
          li
            g-link(to='/#one' v-smooth-scroll) What I Do
          li
            g-link(to='/#two' v-smooth-scroll) Who I Am
          li
            g-link(to='/#work' v-smooth-scroll) My Work
          li
            g-link(to='/#contact' v-smooth-scroll) Contact
          li
            g-link(to="/blog") Blog
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
