<template lang="pug">
  #layout
    PageHeader(
      :title="title"
      :subtitle="subtitle"
      :type="headerType"
      :image="headerImage"
    )
      div(slot="header")
        nav-menu
    slot
    site-footer
</template>

<script>
import NavMenu from "~/components/NavMenu";
import SiteFooter from "~/components/SiteFooter";
import PageHeader from "~/components/PageHeader";

export default {
  components: {
    NavMenu,
    PageHeader,
    SiteFooter
  },
  props: ["title", "subtitle", "headerType", "headerImage"]
};
</script>
