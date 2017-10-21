<template lang="pug">
  div
    b-nav-item-dropdown.d-none.d-md-inline(:text="text")
      b-dropdown-item(v-for="link in linksSafe" :key="link.text" :href="link.href") {{link.text}}
    .d-md-none
      b-nav-text.dropdown-toggle(@click="openMobileDropdown") {{text}}
      .dropdown-content(ref="dropdown" :class="classes" :style="style")
        b-nav-item.mobile-link(v-for="link in linksSafe" :key="link.text" :href="link.href") {{link.text}}
</template>

<script>
export default {
  props: ['text', 'links'],
  data () {
    return {
      open: false,
      height: 0,
      linksSafe: []
    }
  },
  mounted () {
    this.linksSafe = (this.links != null)
      ? this.links
      : this.getLinksFromSlot()
  },
  computed: {
    style () {
      let height = `${this.height}px`
      return {
        'max-height': height
      }
    },
    classes () {
      return {
        'hidden-dropdown-content': !this.open
      }
    }
  },
  methods: {
    getLinksFromSlot () {
      let result = []
      let children = this.$slots.default
      for (let i = 0; i < children.length; i++) {
        let anchor = children[i]
        let href = anchor.data.attrs.href
        let text = anchor.children[0].text
        result.push({
          href,
          text
        })
      }
      return result
    },
    openMobileDropdown () {
      this.open = !this.open
      if (this.open) {
        let height = 0
        let children = this.$refs.dropdown.children
        for (let i = 0; i < children.length; ++i) {
          height += children.item(i).clientHeight
        }
        this.height = height
      } else {
        this.height = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .dropdown-toggle {
    cursor: pointer;
  }
  .mobile-link {
    padding-left: 25px;
  }
  .dropdown-content {
    height: auto;
    transition: max-height .5s;
    overflow: hidden;
  }
  .hidden-dropdown-content {
    max-height: 0;
  }
</style>
