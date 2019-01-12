<template lang="pug">
  Layout
    h1.title Projects
    project(v-for="{ node } in projects" :key="node.id" :project="node")
</template>

<page-query>
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
</page-query>

<script>
import { orderBy } from "lodash";
import Project from "~/components/Project";
export default {
  components: {
    Project
  },
  computed: {
    projects() {
      return orderBy(this.$page.projects.edges, "node.start", "desc");
    }
  }
};
</script>
