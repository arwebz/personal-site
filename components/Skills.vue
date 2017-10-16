<template>
  <b-row>
    <skill class="col-md" name="Full Stack Development" icon="list-alt">
      I have various web development skills from front-end to back-end
      development. To this extent, I am skilled in several different
      technologies including Ruby on Rails, Vue.js, Nuxt.js, Angular.js, ASP.NET
      Web API and MVC, Node.js, MS SQL, and Postgres SQL.
    </skill>
    <skill class="col-md" name="Consulting" icon="handshake-o">
      I have worked at Improving as a Software Consultant since April of 2016. For the
      past year, worked on and put into production an enterprise loan origination
      application that has originated over a half-billion dollars worth of
      loans.</skill>
    <skill class="col-md" name="DevOps" icon="wrench">
      I know how to create Continuous Integration and Delivery pipelines using
      Travis CI and Jenkins as well as how to work in a cross-functional Scrum
      team to deliver quality code to the client frequently.
    </skill>
  </b-row>
</template>

<script>
import Skill from './Skill'
export default {
  components: {
    Skill
  }
}
</script>
