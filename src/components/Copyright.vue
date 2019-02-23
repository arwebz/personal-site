<template lang="pug">
  li &copy; {{ year }} Martin Fracker, Jr. All Rights Reserved
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
