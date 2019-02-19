<template lang="pug">
  router-link(:to="to" :exact="exact" :active-class="activeClass" exact-active-class="")
    slot
</template>

<script>
export default {
  props: ["to", "exact", "inactive"],
  computed: {
    activeClass() {
      return this.inactive ? "" : "is-active";
    }
  }
};
</script>
