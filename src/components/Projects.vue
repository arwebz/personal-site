<template lang="pug">
  .gallery(v-in-viewport)
    project(
      v-for="({ node }, index) in projects"
      :key="node.id"
      :project="node"
      :type="typeFromIndex(index)"
      @selected="selectProject"
    )
    ClientOnly
      modal.gallery-modal(
        name='selected-project'
        height='auto'
        transition='pop-out'
        :scrollable="true"
      )
        .image.fit
          img(
            :src='selectedProject.thumb',
            v-webp='selectedProject.thumb',
            :title='selectedProject.name',
            :alt='selectedProject.name'
          )
        .content
          header
            h2 {{selectedProject.title}}
            h3(v-if="selectedProject.subtitle") {{selectedProject.subtitle}}
          div(v-html="selectedProject.content")
          p
            a(
              v-if="selectedProject.moreInfo != null"
              :href="selectedProject.moreInfo.link"
              v-external-link
            ) {{ selectedProject.linkDisplay }}
</template>

<static-query>
  query Projects {
    projects: allProject {
      edges {
        node {
          title,
          start,
          end,
          thumb,
          client {
            name,
            link
          },
          moreInfo {
            link,
            linkText
          }
          summary,
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
      selectedProject: {}
    };
  },
  computed: {
    projects() {
      return orderBy(this.$static.projects.edges, "node.start", "desc");
    }
  },
  methods: {
    selectProject(project) {
      this.selectedProject = project;
      this.$modal.show("selected-project");
    },
    typeFromIndex(index) {
      return index % 2 === 0 ? "from-left" : "from-right";
    }
  }
};
</script>
