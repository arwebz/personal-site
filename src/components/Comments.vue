<template lang="pug">
  #comments
    ul.actions.special(v-if="!enabled")
      li
        button(
          type="submit"
          @click="enabled = true"
        )
          | Join the Discussion
    vue-disqus(
      v-if="enabled"
      :title="post.title"
      shortname="martin-fracker-jr"
      :identifier="post.path"
      :url="url"
    )
</template>

<script>
export default {
  data() {
    return {
      enabled: false
    };
  },
  props: ["post"],
  computed: {
    url() {
      return `https://www.martinfrackerjr.com${this.post.path}`;
    }
  }
};
</script>

<style lang="less">
#comments {
  margin-top: 2em;

  .actions {
    margin-top: 2.5em;
  }
}
</style>
