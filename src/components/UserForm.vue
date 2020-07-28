<template>
  <form class="user-form">
    <div class="form-group">
      <img class="img-thumbnail avatar" :src="user.picture" />
    </div>
    <div class="form-group">
      <avatar-uploader v-model="user.picture"></avatar-uploader>
    </div>
    <div class="form-group">
      <label for="firstName">Имя</label>
      <input
        id="firstName"
        v-model="user.firstName"
        type="text"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="firstName">Фамилия</label>
      <input
        id="lastName"
        v-model="user.lastName"
        type="text"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <div class="form-check form-check-inline">
        <label class="form-check-label mr-2" for="firstName">Активен</label>
        <input
          id="isActive"
          v-model="user.isActive"
          type="checkbox"
          class="form-check-input"
        />
      </div>
    </div>
    <div class="form-group">
      <label for="firstName">Баланс</label>
      <input
        id="balance"
        v-model="user.balance"
        type="text"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="firstName">Возраст</label>
      <input
        id="age"
        v-model.number="user.age"
        type="number"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="firstName">Уровень доступа</label>
      <select v-model="user.accessLevel" class="form-control">
        <option value="admin">Админ</option>
        <option value="user">Пользователь</option>
        <option value="guest">Гость</option>
      </select>
    </div>
    <div class="form-group">
      <label for="firstName">Компания</label>
      <input
        id="company"
        v-model="user.company"
        type="text"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="firstName">Email</label>
      <input
        id="email"
        v-model="user.email"
        type="email"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="firstName">Телефон</label>
      <input id="phone" v-model="user.phone" type="tel" class="form-control" />
    </div>
    <div class="form-group">
      <label for="firstName">Адрес</label>
      <input
        id="address"
        v-model="user.address"
        type="text"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="firstName">Описание</label>
      <VueEditor id="about" v-model="user.about" />
    </div>
    <div class="form-group">
      <label for="firstName">Зарегистрирован</label>
      <DatePicker
        id="registered"
        v-model="user.registered"
        class="form-control"
      />
    </div>
  </form>
</template>

<script>
const deepEql = require('deep-eql')
import DatePicker from '@/components/DatePicker.vue'
import AvatarUploader from '@/components/AvatarUploader.vue'
import { VueEditor } from 'vue2-editor'
export default {
  name: 'UserForm',
  components: {
    DatePicker,
    AvatarUploader,
    VueEditor,
  },
  model: {
    prop: 'initUser',
  },
  props: {
    initUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {},
    }
  },
  watch: {
    user: {
      handler() {
        this.$emit('input', { ...this.user })
      },
      deep: true,
    },
    initUser: {
      handler: 'setUserData',
      deep: true,
    },
  },
  created() {
    this.setUserData()
  },
  methods: {
    setUserData() {
      if (!deepEql(this.user, this.initUser)) this.user = { ...this.initUser }
    },
  },
}
</script>
<style scoped>
.user-form {
  width: 60%;
  margin: 0 auto;
}
.avatar {
  max-width: 200px;
}
</style>
