<template lang="pug">
  gallery-item(
    :name="project.title"
    src="/images/actsoflove-screenshot.png"
    :subhead="subtitle"
    type="from-left"
  )
    template(v-slot:summary)
      div(v-html="project.content")
    template(v-slot:description)
      div(v-html="project.content")
</template>

<script>
import GalleryItem from "~/components/GalleryItem";
import { formatProjectDate } from "~/helpers/formatProjectDate";
export default {
  components: {
    GalleryItem
  },
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
