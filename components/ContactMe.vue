<template lang="pug">
  div
    p If you have any questions about my skills, any of the projects I have worked on, or would like to set up an interview, please send me an email using the form below.
    form(@submit.prevent="onSubmit" :action="action" :name="formName" netlify)
      input(type="hidden" v-model="honeypot")
      .form-row
        .form-group.col-md
          input#fromName.form-control(type="text" v-model="form.fromName" placeholder="Name" required)
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
          spinner-button.float-right(:disabled="isLoading || status === true" :isLoading="isLoading" :status="status")
            span Submit
</template>

<script>
import axios from 'axios'
import querystring from 'qs'

import PageSection from '~/components/PageSection.vue'
import SpinnerButton from '~/components/SpinnerButton.vue'
export default {
  components: {
    PageSection,
    SpinnerButton
  },
  data () {
    return {
      form: {
        fromName: '',
        email: '',
        subject: '',
        message: ''
      },
      action: 'contact',
      formName: 'contact',
      honeypot: '',
      isLoading: false,
      status: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.honeypot !== '') {
        return
      }
      let formData = querystring.stringify({ 'form-name': this.formName, ...this.form })
      this.isLoading = true
      axios.post(this.action, formData).then(() => {
        this.isLoading = false
        this.status = true
      }).catch(() => {
        this.status = false
        setTimeout(() => { this.status = '' }, 2000)
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
