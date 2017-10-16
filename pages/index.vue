<template lang="pug">
  div
    page-section(title="Software Developer")
      about-me
    page-section(color="#e3fdff")
      b-row.skills
        skill.col-md(name="Full Stack Development" icon="list-alt") I have experience developing apps from the user to experience to data storage. To this extent, I am skilled in several different technologies including Ruby on Rails, Vue.js, Nuxt.js Angular.js, ASP.NET Web API and MVC, Node.js, MS SQL, and Postgres SQL.
        skill.col-md(name="Consulting" icon="handshake-o") Worked at Improving as a Software Consultant since April of 2016. For the past year, worked on and put into production an enterprise loan origination application that has originated over a half-billion dollars worth of loans.
        skill.col-md(name="DevOps" icon="wrench") I know how to create Continuous Integration and Delivery pipelines using Travis CI and Jenkins as well as how to work in a cross-functional Scrum team to deliver quality code to the client frequently.
    page-section(title="Contact Me")
      contact-me
    page-section.text-center(color="#ffefd3")
      social-media-button.social(for="facebook")
      social-media-button.social(for="linkedin")
      social-media-button.social(for="github")
      copyright.copyright
</template>

<script>
import AboutMe from '~/components/AboutMe'
import ContactMe from '~/components/ContactMe'
import Copyright from '~/components/Copyright'
import PageSection from '~/components/PageSection'
import Skill from '~/components/Skill'
import SocialMediaButton from '~/components/SocialMediaButton'
export default {
  components: {
    AboutMe,
    ContactMe,
    Copyright,
    PageSection,
    Skill,
    SocialMediaButton
  }
}
</script>

<style lang="less" scoped>
  .social {
    display: inline-block;
  }
  .copyright {
    padding-top: 50px;
  }
</style>
