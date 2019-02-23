<template lang="pug">
  gallery-item(
    :name="project.title"
    :src="project.thumb"
    :subhead="subtitle"
    :type="type"
    @click.native="selected"
  )
    template(v-slot)
      div(v-html="project.summary")
</template>

<script>
import GalleryItem from "~/components/GalleryItem";
import { formatProjectDate } from "~/helpers/formatProjectDate";
export default {
  components: {
    GalleryItem
  },
  props: ["project", "type"],
  methods: {
    attachLinkText(obj, linkText) {
      return {
        ...obj,
        linkText
      };
    },
    selected() {
      this.$emit("selected", {
        ...this.project,
        linkDisplay: this.linkDisplay,
        subtitle: this.subtitle,
        moreInfo: this.moreInfo
      });
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
      if (!this.moreInfo) {
        return "";
      }
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
