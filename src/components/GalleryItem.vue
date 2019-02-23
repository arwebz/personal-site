<template lang="pug">
  //.gallery-item(:class="type")
    //modal.gallery-modal(:name='name' height='auto' transition='pop-out')
      .image.fit
        img(:src='src', :title='name', :alt='name')
      .content
        header
          h2 {{name}}
          h3(v-if="subhead") {{subhead}}
        slot(name="description")
  article(:class="type")
    .image.fit
      img(:src='src', :title='name', :alt='name')
      .teaser-background
      .teaser-foreground
        header
          h3 {{name}}
        slot(name="summary")
</template>

<script>
export default {
  props: ["name", "src", "subhead", "type"]
};
</script>
