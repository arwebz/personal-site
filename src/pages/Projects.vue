<template lang="pug">
  Layout(
    title="Projects"
    subtitle="The best thing about starting a new project is the satisfaction I get from learning something new."
    header-type="is-dark"
    header-image="/coding.jpeg"
  )
    project(v-if="" v-for="{ node } in projects" :key="node.id" :project="node")
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
      if (!this.$page.projects) {
        return [];
      }
      return orderBy(this.$page.projects.edges, "node.start", "desc");
    }
  }
};
</script>
