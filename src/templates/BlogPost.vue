<template lang="pug">
  Layout
    section.main.style4
      .content
        header
          h2.post-title {{$page.post.title}}
          p.post-date Posted {{$page.post.date | date}}
        div(v-html="$page.post.content")
</template>

<page-query>
query Post ($path: String!) {
  post: blogPost (path: $path) {
    title
    date
    content
  }
}
</page-query>
