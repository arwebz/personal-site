<template lang="pug">
  Layout
    section.main.style4.secondary
      .content
        header
          h2 Martin's Blog
        .box(v-for="{ node } in posts")
          header
            h3.post-title {{node.title}}
            p.post-date
              small Posted {{node.date | date}}

          .summary(v-html="node.excerpt")
          .more
            g-link(:to="node.path") Read More
</template>

<page-query>
query Posts {
  posts: allBlogPost {
    edges {
      node {
        title,
        excerpt,
        tags,
        date,
        path
        content
      }
    }
  }
}
</page-query>

<script>
import { orderBy } from "lodash";

export default {
  computed: {
    posts() {
      return orderBy(this.$page.posts.edges, "node.date", "desc");
    }
  }
};
</script>

<style lang="less" scoped>
.summary {
  vertical-align: left !important;
}

.post-title {
  font-size: 1.5rem;
}

.post-date {
  margin-top: 0.5em;
}

.more {
  margin-top: 1em;
}

.box + .box {
  margin-top: 2em;
}
</style>
