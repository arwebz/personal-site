<template lang="pug">
  #comments
    ul.actions.special
      li
        button(
          v-if="!enabled"
          type="submit"
          @click="enabled = true"
        )
          | Join the Discussion
    vue-disqus(
      v-if="enabled"
      :title="post.title"
      shortname="https-www-martinfrackerjr-com"
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
