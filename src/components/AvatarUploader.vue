<template>
  <div>
    <input type="text" :value="value" class="form-control mb-2" readonly />
    <input ref="img" type="file" class="d-none" @change="uploadImg" />
    <button type="button" class="btn btn-primary" @click="selectImg">
      Загрузить
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    value: {
      type: String,
      required: true,
      default: () => '',
    },
  },
  methods: {
    selectImg() {
      this.$refs.img.click()
    },
    uploadImg() {
      var data = new FormData()
      data.append('image', this.$refs.img.files[0])

      const url = 'https://api.imgur.com/3/image'
      const config = {
        headers: { Authorization: 'Client-ID 1e5089a864867b8' },
      }
      axios
        .post(url, data, config)
        .then(({ data }) => this.updateURL(data.data.link))
        .catch(e => console.log(e))
    },
    updateURL(url) {
      this.$emit('input', url)
    },
  },
}
</script>
