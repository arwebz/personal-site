<template lang="pug">
  div
    page-section
      about-me
    page-section.is-info
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
  },
  mounted () {
    this.setPageInfo({
      title: 'Martin Fracker, Jr.',
      subtitle: 'Web Developer'
    })
  }
}
</script>
