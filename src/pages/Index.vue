<template lang="pug">
  Layout(
    :title="$static.metaData.siteName"
    subtitle="Web Developer"
    header-type="is-primary"
  )
    #home
      About
      Skills
      ContactMe
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import About from "~/components/About";
import Skills from "~/components/Skills";
import ContactMe from "~/components/ContactMe";
export default {
  components: {
    About,
    Skills,
    ContactMe
  }
};
</script>
