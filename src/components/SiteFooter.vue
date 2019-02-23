<template lang="pug">
  footer#footer
    ul.icons
      li
        a.icon.fa-facebook(href="https://www.facebook.com/martin.fracker" target="_blank")
          span.label Facebook
      li
        a.icon.fa-linkedin(href="https://www.linkedin.com/in/martinfrackerjr" target="_blank")
          span.label LinkedIn
      li
        a.icon.fa-github(href="https://www.github.com/towerism" target="_blank")
          span.label Github
    ul.menu
      li Copyright &copy; {{year}} Martin Fracker, Jr. All Rights Reserved
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
