<template>
  <div class="container-fluid">
    <h1 class="h4 text-center">Добавить пользователя</h1>
    <user-form v-model="user"></user-form>
    <div class="d-flex justify-content-center my-2">
      <button type="button" class="btn btn-primary mr-2" @click="saveUser">
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'

export default {
  name: 'SaveUser',
  components: {
    UserForm,
  },
  data: function() {
    return {
      user: {},
    }
  },
  methods: {
    saveUser() {
      axios
        .post('http://localhost:3000/users', this.user)
        .then(response => {
          this.$router.push('/edit-user/' + response.data.id)
        })
        .catch(e => console.error(e))
    },
  },
}
</script>
