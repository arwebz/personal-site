<template lang="pug">
  div#skill.text-center
    i.fa.icon(:class="classes")
    h5.title {{ name }}
    div.description.text-justify
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
  .icon {
    font-size: 3.1em;
    padding-bottom: 20px;
    color: #3aaabf;
  }
  .title {
    color: #85afc0;
  }
}
</style>
