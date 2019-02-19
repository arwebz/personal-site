<template lang="pug">
  PageSection#contact-me
    div(v-html="$static.contactMe.content")
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

<static-query>
  query ContactMe {
    contactMe: misc (path: "/content/misc/contact-me") {
      content
    }
  }
</static-query>

<script>
import axios from "axios";
import querystring from "qs";
import SpinnerButton from "./SpinnerButton";
export default {
  components: {
    SpinnerButton
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        text: ""
      },
      action: "contact",
      formName: "contact",
      honeypot: "",
      isLoading: false,
      status: ""
    };
  },
  computed: {
    submissionPayload() {
      return {
        "form-name": this.formName,
        to: "martin.frackerjr@gmail.com",
        name: this.form.name,
        email: this.form.email,
        subject: this.form.subject,
        text: this.form.text
      };
    }
  },
  methods: {
    onSubmit() {
      if (this.honeypot !== "") {
        return;
      }
      let formData = querystring.stringify(this.submissionPayload);
      this.isLoading = true;
      axios
        .post(this.action, formData)
        .then(() => {
          this.isLoading = false;
          this.status = true;
          this.showSuccess();
        })
        .catch(() => {
          this.status = false;
          this.showWarning();
          setTimeout(() => {
            this.status = "";
          }, 2000);
        });
    },
    showSuccess() {
      this.$snackbar.open({
        message: "Thank you for your message!",
        type: "is-success",
        position: "is-top"
      });
    },
    showWarning() {
      this.$snackbar.open({
        message: "Your message failed to send!",
        type: "is-warning",
        position: "is-top",
        actionText: "Retry",
        onAction: () => {
          this.onSubmit();
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
#contact-form {
  margin-top: 30px;
}
#message {
  height: 12em;
}
</style>
