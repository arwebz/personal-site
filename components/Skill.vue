<template lang="pug">
  #skill
    p.has-text-centered
      i.fa.myicon(:class="classes")
    h4.title.is-4.has-text-centered {{ name }}
    p.description.has-text-centered
      slot
</template>

<script>
export default {
  props: ['name', 'icon'],
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
  .title {
    color: #85afc0;
  }
}
</style>
