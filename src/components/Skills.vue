<template lang="pug">
  #skills
    PageSection.is-info
      .columns
        skill.column(
          v-for="{ node } in skills"
          :skill="node"
          :key="node.id"
        )
</template>

<static-query>
  query Skills {
    skills: allSkill {
      edges {
        node {
          title,
          icon,
          content,
          order
        }
      }
    }
  }
</static-query>

<script>
import Skill from "./Skill";
import { orderBy } from "lodash";

export default {
  components: {
    Skill
  },
  computed: {
    skills() {
      return orderBy(this.$static.skills.edges, "node.order");
    }
  }
};
</script>
