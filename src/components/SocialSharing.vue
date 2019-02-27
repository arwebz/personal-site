<template lang="pug">
  social-sharing.social-sharing(
    :url="url"
    :title="post.title"
    :description="description"
    :quote="description"
    inline-template
  )
    .icons
      network(network="facebook")
        i.icon.fa.fa-facebook
      network(network="linkedin")
        i.icon.fa.fa-linkedin
      network(network="twitter")
        i.icon.fa.fa-twitter
      network(network="reddit")
        i.icon.fa.fa-reddit
      network(network="email")
        i.icon.fa.fa-envelope
</template>

<script>
import * as truncate from "truncate";

export default {
  props: ["post"],
  computed: {
    url() {
      return `https://www.martinfrackerjr.com${this.post.path}`;
    },
    description() {
      return truncate(this.post.excerpt, 180);
    }
  }
};
</script>

<style lang="less">
.social-sharing {
  .icons {
    i {
      text-align: center;
    }
  }
}
</style>
