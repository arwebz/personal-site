<template lang="pug">
  footer#footer
    ul.icons
      li
        a.icon.fa-facebook(href="https://www.facebook.com/martin.fracker" v-external-link)
          span.label Facebook
      li
        a.icon.fa-linkedin(href="https://www.linkedin.com/in/martinfrackerjr" v-external-link)
          span.label LinkedIn
      li
        a.icon.fa-github(href="https://www.github.com/towerism" v-external-link)
          span.label Github
      li
        a.icon.fa-rss(href="/rss.xml" target="_blank")
          span.label RSS Feed
    ul.menu
      li Copyright &copy; {{year}} Martin Fracker, Jr. All Rights Reserved
      li
        a(href="https://github.com/Towerism/personal-site" v-external-link) Source
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
