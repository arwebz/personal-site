<template lang="pug">
  .hero(:class="type")
    .hero-body
      .container
        h1.title {{title}}
        h2.subtitle(v-if="subtitle != null") {{subtitle}}
        slot
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    type: {
      type: String,
      default: 'is-primary'
    }
  }
}
</script>
