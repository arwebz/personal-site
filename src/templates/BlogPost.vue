<template lang="pug">
  Layout
    #blog-post
      section.main.style4
        .content
          header
            h2.post-title {{$page.post.title}}
            p.post-date
              small Posted {{$page.post.date | date}}
          div(v-html="$page.post.content")
          social-sharing.social(
            :url="url"
            :title="$page.post.title"
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

export default {
  metaInfo: {
    title: "Martin's Blog"
  },
  computed: {
    url() {
      return `https://www.martinfrackerjr.com${this.$page.post.path}`;
    },
    description() {
      return truncate(this.$page.post.excerpt, 180);
    }
  }
};
</script>

<style lang="less">
#blog-post {
  .post-date {
    margin-top: 0.5em;
  }

  .icons {
    i {
      text-align: left;
    }
  }
}
</style>
