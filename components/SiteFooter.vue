<template lang="pug">
  page-section.text-center(color="#ffefd3")
    social-media-button.social(for="facebook")
    social-media-button.social(for="linkedin")
    social-media-button.social(for="github")
    copyright.copyright
</template>

<script>
import Copyright from '~/components/Copyright'
import PageSection from '~/components/PageSection'
import SocialMediaButton from '~/components/SocialMediaButton'
export default {
  components: {
    Copyright,
    PageSection,
    SocialMediaButton
  }
}
</script>

<style lang="less" scoped>
  .social {
    display: inline-block;
  }
  .copyright {
    padding-top: 50px;
  }
</style>
