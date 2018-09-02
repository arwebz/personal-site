<template lang="pug">
  .tags
    .tag.is-info(v-for="tag in tags") {{tag}}
</template>

<script>
export default {
  props: ['tags']
}
</script>
