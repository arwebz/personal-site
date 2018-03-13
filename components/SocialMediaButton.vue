<template lang="pug">
  div#social-media-button
    a.link(:href="link")
      b-icon(@click="go(link)" custom-size="fa-4x" pack="fa" :icon="icon" type="is-default")
</template>

<script>
import _ from 'lodash'

const sites = {
  facebook: {
    icon: 'facebook-square',
    link: 'https://www.facebook.com/martin.fracker'
  },
  linkedin: {
    icon: 'linkedin-square',
    link: 'https://www.linkedin.com/in/martinfrackerjr/'
  },
  github: {
    icon: 'github-square',
    link: 'https://www.github.com/towerism'
  }
}

export default {
  props: {
    for: {
      type: String,
      default: false,
      validator (value) {
        let socialMediaSites = _.keys(sites)
        return socialMediaSites.includes(value)
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    site () {
      return sites[this.for]
    },
    icon () {
      return this.site.icon
    },
    link () {
      return this.site.link
    }
  },
  methods: {
    go (link) {
      window.open(link)
    }
  }
}
</script>

<style lang="less" scoped>
@padding: 40px;
#social-media-button {
  padding: 0 @padding 0 @padding;
}
.link {
  color: inherit;
}
</style>
