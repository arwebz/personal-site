<template lang="pug">
  #project.content
    h3.title {{project.title}}
    h6.has-text-grey.subtitle {{subtitle}}
    div(v-html="project.content")
    p.link
      a(v-if="moreInfo != null" :href="moreInfo.link") {{ linkDisplay }}
</template>

<script>
import { formatProjectDate } from "~/helpers/formatProjectDate";
export default {
  props: ["project"],
  methods: {
    attachLinkText(obj, linkText) {
      return {
        ...obj,
        linkText
      };
    }
  },
  computed: {
    moreInfo() {
      if (this.project.internal != null) {
        return this.attachLinkText(
          this.project.internal,
          "Internal Application Development"
        );
      } else if (this.project.github != null) {
        return this.attachLinkText(
          this.project.github,
          "View the Repository on Github"
        );
      } else if (this.project.client != null) {
        return this.attachLinkText(
          this.project.client,
          `Client: ${this.project.client.name}`
        );
      } else if (this.project.moreInfo != null) {
        return this.attachLinkText(
          this.project.moreInfo,
          this.project.moreInfo.linkText
        );
      } else {
        return null;
      }
    },
    linkDisplay() {
      return this.moreInfo.linkText;
    },
    subtitle() {
      return formatProjectDate(this.project);
    }
  }
};
</script>

<style lang="less" scoped>
.link {
  padding-top: 10px;
}
</style>
