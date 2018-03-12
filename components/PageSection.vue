<template lang="pug">
  #page-section(:style="style")
    .container
      .title(v-if="title != null") {{ title }}
      slot
</template>

<script>
export default {
  props: ['title', 'color'],
  computed: {
    style () {
      if (this.color == null) {
        return {}
      }
      return {
        'background-color': this.color
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @padding: 50px;
  #page-section {
    padding: @padding 0 @padding 0;
    .title {
      color: #535353;
    }
  }
</style>

