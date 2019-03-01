<template lang="pug">
  article(:class="type")
    .image.fit
      img(v-if="src" v-webp='src', :title='name', :alt='name')
      .teaser-background
      .teaser-foreground
        .content
          header
            h3 {{name}}
          slot
</template>

<script>
export default {
  props: ["name", "src", "subhead", "type"]
};
</script>
