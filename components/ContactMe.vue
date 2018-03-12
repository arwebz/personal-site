<template lang="pug">
  div
    p If you have any questions about my skills, any of the projects I have worked on, or would like to set up an interview, please send me an email using the form below.
    form#contact-form(@submit.prevent="onSubmit" :action="action" :name="formName" netlify)
      input(type="hidden" v-model="honeypot")
      input(type="hidden" name="to" v-model="form.to")
      b-field(label="From" horizontal)
        b-input.form-control(name="name" icon-pack="fa" icon="user" type="text" v-model="form.name" placeholder="Name" required)
        b-input.form-control(name="email" icon-pack="fa" icon="envelope" type="email" v-model="form.email" placeholder="Email" required)
      b-field(label="Subject" horizontal)
        b-input.form-control(name="subject" icon-pack="fa" icon="pencil" type="text" v-model="form.subject" placeholder="Subject" required)
      b-field(label="Message" horizontal)
        b-input#message.form-control(type="textarea" name="text" v-model="form.text" placeholder="Message" required)
      spinner-button.is-pulled-right(:disabled="isLoading || status === true" :isLoading="isLoading" :status="status") Submit
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
        to: 'martin.frackerjr@gmail.com',
        name: this.form.name,
        email: this.form.email,
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
        this.status = false
        this.showSuccess()
      }).catch(() => {
        this.status = false
        this.showWarning()
        setTimeout(() => { this.status = '' }, 2000)
      })
    },
    showSuccess () {
      this.$snackbar.open({
        message: 'Thank you for your message!',
        type: 'is-success',
        position: 'is-top'
      })
    },
    showWarning () {
      this.$snackbar.open({
        message: 'Your message failed to send!',
        type: 'is-warning',
        position: 'is-top',
        actionText: 'Retry',
        onAction: () => {
          this.onSubmit()
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#contact-form {
  margin-top: 30px;
}
#message {
  height: 12em;
}
</style>
