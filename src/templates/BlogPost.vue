<template lang="pug">
  Layout
    section.main.style4
      .content
        header
          h2.post-title {{$page.post.title}}
          p.post-date
            small Posted {{$page.post.date | date}}
        .post-content(v-html="$page.post.content")
        hr
        social-sharing.social(:post="$page.post")
        hr
        comments.comments(:post="$page.post")
</template>

<page-query>
query Post ($path: String!) {
  post: blogPost (path: $path) {
    title
    date
    content
    path
    excerpt
    tags
  }
}
</page-query>

<script>
import * as truncate from "truncate";
import SocialSharing from "~/components/SocialSharing";
import Comments from "~/components/Comments";

export default {
  components: {
    SocialSharing,
    Comments
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  computed: {
    url() {
      return `https://www.martinfrackerjr.com${this.$page.post.path}`;
    }
  }
};
</script>

<style lang="less" scoped>
.post-date {
  margin-top: 0.5em;
}

.post-content {
  margin-bottom: 2em;
}

.comments {
  margin-top: 2em;
}
</style>
