<template>
  <input ref="datepicker" type="text" />
</template>

<script>
import flatpickr from 'flatpickr'
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      fpInstance: null,
    }
  },
  mounted() {
    this.fpInstance = flatpickr(this.$refs.datepicker, {
      dateFormat: 'd.m.Y',
      onChange: (_, dateStr) => {
        this.$emit('input', dateStr)
      },
    })
    this.fpInstance.setDate(this.value)
  },
  beforeDestroy() {
    this.fpInstance.destroy()
  },
}
</script>
