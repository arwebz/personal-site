<template lang="pug">
  .columns.is-centered
    skill(v-for="skill in skills" :key="skill.slug" class="column" :skill="skill")
</template>

<script>
import Skill from './Skill'
import { mapGetters } from 'vuex'

export default {
  components: {
    Skill
  },
  computed: {
    ...mapGetters({
      skills: 'skills/all'
    })
  }
}
</script>
