<template lang="pug">
  #projects
    project(v-for="project in projects" :key="project.title" :project="project")
</template>


<script>
import Coding from '~/assets/img/coding.jpeg'
import Project from '~/components/Project'
import { sortBy } from 'lodash'
export default {
  components: {
    Project
  },
  async asyncData ({ app }) {
    return {
      projects:
        sortBy(
          await app.$content('/projects').getAll(),
          'end'
        ).reverse()
    }
  },
  data () {
    return {
      heroBackground: Coding
    }
  },
  mounted () {
    this.setPageInfo({
      title: 'Projects',
      subtitle: 'The best thing about starting a new project is the satisfaction I get from learning something new.',
      image: this.heroBackground,
      heroType: 'is-dark'
    })
  }
}
</script>

