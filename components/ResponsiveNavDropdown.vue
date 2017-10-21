<template lang="pug">
  div
    b-nav-item-dropdown.d-none.d-md-inline(:text="text")
      b-dropdown-item(v-for="link in linksSafe" :key="link.text" :href="link.href") {{link.text}}
    .d-md-none
      b-nav-text.dropdown-toggle(@click="open = !open") {{text}}
      .dropdown-content(ref="dropdown" :class="mobileClasses" :style="mobileStyle")
        b-nav-item.mobile-link(v-for="link in linksSafe" :key="link.text" :href="link.href") {{link.text}}
</template>

<script>
export default {
  props: ['text', 'links'],
  data () {
    return {
      open: false
    }
  },
  computed: {
    linksSafe () {
      return this.links != null
        ? this.links
        : this.linksFromSlot
    },
    linksFromSlot () {
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
    mobileStyle () {
      let height = `${this.mobileDropdownHeight}px`
      return {
        'max-height': height
      }
    },
    mobileDropdownHeight () {
      return this.open
        ? this.contentHeight
        : 0
    },
    contentHeight () {
      let height = 0
      let children = this.$refs.dropdown.children
      for (let i = 0; i < children.length; ++i) {
        height += children.item(i).clientHeight
      }
      return height
    },
    mobileClasses () {
      return {
        'hidden-dropdown-content': !this.open
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
