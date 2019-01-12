<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <About />
  </Layout>
</template>

<script>
import About from '~/components/About'
export default {
  components: {
    About
  }
}
</script>
