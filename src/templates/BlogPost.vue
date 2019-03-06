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
        .share-container
          call-out.call-out
          social-sharing.social(:post="$page.post")
        hr
        comments(:post="$page.post")
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
import CallOut from "~/components/CallOut";

export default {
  components: {
    SocialSharing,
    Comments,
    CallOut
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.excerpt
        }
      ]
    };
  },
  computed: {
    url() {
      return `https://www.martinfrackerjr.com${this.$page.post.path}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/libs/_breakpoints";

.post-date {
  margin-top: 0.5em;
}

.post-content {
  margin-bottom: 2em;
}

.share-container {
  @include breakpoint(">=medium") {
    display: flex;
    justify-content: space-between;
  }
}
</style>
