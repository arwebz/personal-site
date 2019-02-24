<template lang="pug">
  article(:class="type")
    .image.fit
      g-image(:src='src', :title='name', :alt='name', quality='20',  width="600px")
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
