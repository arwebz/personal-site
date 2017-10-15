<template lang="pug">
  div
    h2 {{ title }}
    slot
</template>

<script>
export default {
  props: ['title']
}
</script>
