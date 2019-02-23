<template lang="pug">
  #layout
    nav-menu
    slot
</template>

<script>
import NavMenu from "~/components/NavMenu";
export default {
  components: {
    NavMenu
  }
};
</script>
