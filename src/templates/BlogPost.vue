<template lang="pug">
  Layout
    section.main.style4
      .content
        header
          h2.post-title {{$page.post.title}}
          p.post-date
            small Posted {{$page.post.date | date}}
        div(v-html="$page.post.content")
        hr
        social-sharing(:post="$page.post")
        hr
        vue-disqus(
          :title="$page.post.title"
          shortname="https-www-martinfrackerjr-com"
          :identifier="$page.post.path"
          :url="url"
        )

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

export default {
  components: {
    SocialSharing
  },
  metaInfo: {
    title: "Martin's Blog"
  },
  computed: {
    url() {
      return `https://www.martinfrackerjr.com${this.$page.post.path}`;
    }
  }
};
</script>

<style lang="less">
.post-date {
  margin-top: 0.5em;
}
</style>
