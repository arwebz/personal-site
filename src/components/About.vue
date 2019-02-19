<template lang="pug">
  PageSection
    div(v-html="$static.about.content")
</template>

<static-query>
  query About {
    about: misc (path: "/content/misc/about-me") {
      content
    }
  }
</static-query>
