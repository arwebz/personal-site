<template lang="pug">
  div#social-media-button
    a(:href="link")
      i.fa.icon(:class="classes")
</template>

<script>
import _ from 'lodash'

const sites = {
  facebook: {
    classes: ['fa-facebook-square', 'facebook'],
    link: 'https://www.facebook.com/martin.fracker'
  },
  linkedin: {
    classes: ['fa-linkedin-square', 'linkedin'],
    link: 'https://www.linkedin.com/in/martinfrackerjr/'
  },
  github: {
    classes: ['fa-github-square', 'github'],
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
    classes () {
      return this.site.classes
    },
    link () {
      return this.site.link
    }
  }
}
</script>

<style lang="less" scoped>
@padding: 25px;
#social-media-button {
  padding: 0 @padding 0 @padding;
  .icon {
    font-size: 3em;
  }
  .facebook {
    color: #3b5998;
  }
  .linkedin {
    color: #0077b5;
  }
  .github {
    color: black;
  }
}
</style>
