<template lang="pug">
  .gallery(v-in-viewport)
    project(
      v-for="{ node } in projects"
      :key="node.id"
      :project="node"
      :class="galleryArticleClass"
      @click.native="hideImages"
    )
</template>

<static-query>
  query Projects {
    projects: allProject {
      edges {
        node {
          title,
          start,
          end,
          client {
            name,
            link
          },
          internal {
            link
          },
          github {
            link
          },
          content
        }
      }
    }
  }
</static-query>

<script>
import NavMenu from "~/components/NavMenu";
import GalleryItem from "~/components/GalleryItem";
import Project from "~/components/Project";
import { orderBy } from "lodash";
export default {
  components: {
    NavMenu,
    GalleryItem,
    Project
  },
  data() {
    return {
      areImagesHidden: false
    };
  },
  computed: {
    galleryArticleClass() {
      return {
        hidden: this.areImagesHidden
      };
    },
    projects() {
      return orderBy(this.$static.projects.edges, "node.start", "desc");
    }
  },
  methods: {
    hideImages() {
      this.areImagesHidden = true;
    }
  }
};
</script>
