<template>
  <div v-html="$static.about.content"></div>
</template>

<static-query>
  query About {
    about: misc (path: "/content/misc/about-me") {
      content
    }
  }
</static-query>
