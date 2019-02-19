<template lang="pug">
  .hero#page-section
    .hero-body
      .container
        .title(v-if="title != null") {{ title }}
        .subtitle(v-if="subtitle != null") {{ subtitle }}
        slot
</template>

<script>
export default {
  props: ["title", "subtitle"]
};
</script>
