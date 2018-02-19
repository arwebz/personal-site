<template lang="pug">
  .container
    ul
      li(v-for="post in posts")
        nuxt-link(:to="post.path") {{ post.title }}
</template>

<script>
export default {
  async asyncData ({ app, route }) {
    return {
      posts: await app.$content('/content-api/articles').getAll()
    }
  }
}
</script>

