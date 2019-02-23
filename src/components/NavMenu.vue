<template lang="pug">
  header#header
    h1 {{$static.metaData.siteName}}
    ClientOnly
      nav
        ul
          li
            a(href='#intro' v-smooth-scroll) Intro
          li
            a(href='#one' v-smooth-scroll) What I Do
          li
            a(href='#two' v-smooth-scroll) Who I Am
          li
            a(href='#work' v-smooth-scroll) My Work
          li
            a(href='#contact' v-smooth-scroll) Contact
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
