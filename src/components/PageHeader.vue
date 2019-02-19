<template lang="pug">
  div
    .hero(ref="banner" :class="heroClass" :style="heroStyle")
      slot.hero-head(name="header")
      .hero-body(name="body")
        .container
          h1.title {{title}}
          h2.subtitle(v-if="subtitle") {{subtitle}}
          slot
      slot.hero-foot(name="footer")
</template>

<script>
export default {
  props: ["title", "subtitle", "type", "image"],
  computed: {
    heroClass() {
      var classes = [];
      if (this.image) {
        classes.push("is-large", "shade");
      }
      if (this.type) {
        classes.push(this.type);
      }
      return classes;
    },
    heroStyle() {
      if (!this.image) {
        return {};
      }
      return {
        "background-image": `url("${this.image}")`,
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center center"
      };
    }
  }
};
</script>

<style lang="less" scoped>
.shade {
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
}
</style>
