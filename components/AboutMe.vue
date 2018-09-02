<template lang="pug">
  .media.is-mobile
    figure.media-left
      p.image.is-128x128
        img(src="~/assets/img/profile.jpeg")
    nuxtent-body.media-content(:body="aboutMe.body")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      get: ['misc/get']
    }),
    aboutMe () {
      return this.get('about-me')
    }
  }
}
</script>


<style lang="less" scoped>
.image {
  border-radius: 50%;
  overflow: hidden;
}
</style>
