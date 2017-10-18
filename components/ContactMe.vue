<template lang="pug">
  div
    p If you have any questions about my skills, any of the projects I have worked on, or would like to set up an interview, please send me an email using the form below.
    form(@submit.prevent="onSubmit" netlify :netlify-honeypot="honeyInput")
      input(type="hidden" :name="honeyInput")
      .form-row
        .form-group.col-md
          input#name.form-control(type="text" v-model="form.name" placeholder="Name" required)
        .form-group.col-md
          input#email.form-control(style="width: 100%" type="email" v-model="form.email" placeholder="Email" required)
      .form-row
        .form-group.col-md
          input#subject.form-control(type="text" v-model="form.subject" placeholder="Subject" required)
      .form-row
        .form-group.col
          textarea#message.form-control(type="text" v-model="form.message" placeholder="Message" required)
      .form-row
        .col
          button.btn.btn-info.float-right Submit
</template>

<script>
import axios from 'axios'
import querystring from 'querystring'

import PageSection from '~/components/PageSection.vue'
export default {
  components: {
    PageSection
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      honeyInput: 'honey-input'
    }
  },
  methods: {
    onSubmit () {
      let formData = querystring.stringify({
        'form-name': 'contact', ...this.form
      })
      axios.post('/', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#message {
  height: 12em;
}
</style>
