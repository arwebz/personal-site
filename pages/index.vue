<template lang="pug">
  div
    page-section(title="Software Developer")
      about-me
    page-section(color="#e3fdff")
      skills
    page-section(title="Contact Me")
      contact-me
</template>

<script>
import AboutMe from '~/components/AboutMe'
import ContactMe from '~/components/ContactMe'
import PageSection from '~/components/PageSection'
import Skills from '~/components/Skills'
export default {
  components: {
    AboutMe,
    ContactMe,
    PageSection,
    Skills
  }
}
</script>
