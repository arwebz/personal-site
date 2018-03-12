<template>
  <button class="button" :class="buttonClasses">
    <span class="icon is-small has-text-white" v-if="showCheckmark">
      <i class="fa fa-check"></i>
    </span>
    <span class="icon is-small has-text-white" v-else-if="showCross">
      <i class="fa fa-times"></i>
    </span>
    <span class="icon is-small has-text-white" v-else>
      <i class="fa fa-paper-plane"></i>
    </span>
    <span v-if="showSlot">
      <slot></slot>
    </span>
    <span v-else-if="isSuccess">
      Success!
    </span>
    <span v-else>
      Failure!
    </span>
  </button>
</template>

<script>
export default {
  name: 'vue-button-spinner',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    status: {
      type: [String, Boolean],
      default: ''
    }
  },
  computed: {
    buttonClasses () {
      return {
        'is-primary': !this.isSuccess && this.emptyStatus,
        'is-danger': !this.isSuccess && !this.emptyStatus,
        'is-success': this.isSuccess,
        'is-loading': this.isLoading
      }
    },
    showCheckmark () {
      return !this.emptyStatus && this.isSuccess && !this.loading
    },
    showCross () {
      return !this.emptyStatus && !this.isSuccess && !this.loading
    },
    loading () {
      return this.isLoading
    },
    isSuccess () {
      return this.status === 'success' || this.status === true
    },
    emptyStatus () {
      return this.status !== true && this.status !== false
    },
    showSlot () {
      return !this.isSuccess && (this.loading || this.emptyStatus)
    }
  }
}
</script>
