<template lang="pug">
  div
    p If you have any questions about my skills, any of the projects I have worked on, or would like to set up an interview, please send me an email using the form below.
    form(@submit.prevent="onSubmit" :action="action" :name="formName" netlify)
      input(type="hidden" v-model="honeypot")
      input(type="hidden" name="to" v-model="form.to")
      .form-row
        .form-group.col-md
          input.form-control(type="text" v-model="form.name" placeholder="Name" required)
        .form-group.col-md
          input.form-control(name="from" type="email" v-model="form.email" placeholder="Email" required)
      .form-row
        .form-group.col-md
          input.form-control(name="subject" type="text" v-model="form.subject" placeholder="Subject" required)
      .form-row
        .form-group.col
          textarea#message.form-control(name="text" type="text" v-model="form.text" placeholder="Message" required)
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
        name: '',
        email: '',
        subject: '',
        text: ''
      },
      action: 'contact',
      formName: 'contact',
      honeypot: '',
      isLoading: false,
      status: ''
    }
  },
  computed: {
    submissionPayload () {
      return {
        'form-name': this.formName,
        from: `${this.form.name} <${this.form.email}>`,
        to: 'martin.frackerjr@gmail.com',
        subject: this.form.subject,
        text: this.form.text
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.honeypot !== '') {
        return
      }
      let formData = querystring.stringify(this.submissionPayload)
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
