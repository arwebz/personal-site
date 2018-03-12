<template lang="pug">
  div
    hero-section(title="Martin Fracker, Jr." subtitle="Web Developer")
    page-section
      about-me
    page-section(color="#e3fdff")
      skills
    page-section(title="Contact Me")
      contact-me
</template>

<script>
import AboutMe from '~/components/AboutMe'
import ContactMe from '~/components/ContactMe'
import HeroSection from '~/components/HeroSection'
import PageSection from '~/components/PageSection'
import Skills from '~/components/Skills'
export default {
  components: {
    AboutMe,
    ContactMe,
    HeroSection,
    PageSection,
    Skills
  }
}
</script>
