<template>
  <div class="container-fluid users">
    <h1 class="h4 text-center mb-4">Список пользователей</h1>
    <div v-if="!usersAreLoaded" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <template v-else-if="usersCount">
      <p>Всего пользователей: {{ usersCount }}</p>
      <rows-on-page-select v-model="rowsOnPage"></rows-on-page-select>
      <users-list :users="users"></users-list>
      <app-pagination
        v-model="currentPage"
        :items-count="usersCount"
        :items-to-show="rowsOnPage"
      ></app-pagination>
    </template>
    <template v-else>
      <p>{{ message }}</p>
    </template>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList.vue'
import AppPagination from '@/components/AppPagination.vue'
import RowsOnPageSelect from '@/components/RowsOnPageSelect.vue'
import axios from 'axios'

export default {
  name: 'Users',
  components: {
    UsersList,
    AppPagination,
    RowsOnPageSelect,
  },
  data() {
    return {
      users: [],
      usersCount: 0,
      usersAreLoaded: false,
      message: '',
      rowsOnPage: 5,
      currentPage: 1,
    }
  },
  watch: {
    currentPage() {
      this.getUsers()
    },
    rowsOnPage() {
      this.getUsers()
    },
  },
  created() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      axios
        .get(
          `http://localhost:3000/users?_page=${this.currentPage}&_limit=${this.rowsOnPage}`
        )
        .then(response => {
          this.users = response.data
          this.usersCount = +response.headers['x-total-count']
          if (!this.users.length) this.message = 'Пользователи отсутствуют'
        })
        .catch(e => (this.message = 'В процессе загрузки произошла ошибка'))
        .finally(() => (this.usersAreLoaded = true))
    },
  },
}
</script>
