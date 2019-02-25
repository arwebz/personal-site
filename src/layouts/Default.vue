<template lang="pug">
  #layout
    nav-menu
    slot
    site-footer
</template>

<script>
import NavMenu from "~/components/NavMenu";
import SiteFooter from "~/components/SiteFooter";

export default {
  components: {
    NavMenu,
    SiteFooter
  }
};
</script>
