<template lang="pug">
  #skill
    p.has-text-centered
      b-icon.title(pack="fa" is-large :icon="skill.icon")
    h4.subtitle.is-4.has-text-centered {{ skill.title }}
    p.description.has-text-centered
      nuxtent-body(:body="skill.body")
</template>

<script>
export default {
  props: ['skill'],
  computed: {
    classes () {
      return [`fa-${this.icon}`]
    }
  }
}
</script>

<style lang="less" scoped>
#skill {
  .myicon {
    font-size: 3.1em;
    color: #3aaabf;
  }
}
</style>
