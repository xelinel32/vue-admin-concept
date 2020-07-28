<template>
  <table class="table table-bordered table-responsive">
    <thead>
      <slot name="thead">
        <th>ID</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Статус</th>
        <th>Баланс</th>
        <th>Возраст</th>
        <th>Уровень доступа</th>
        <th>Компания</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Адрес</th>
        <th>Зарегистрирован</th>
      </slot>
    </thead>

    <tbody>
      <tr v-for="user in users" :key="user.id">
        <slot name="row" :user="user">
          <td>
            <router-link
              :to="`/edit-user/${user.id}`"
              title="Редактировать/Удалить"
              >{{ user.id }}</router-link
            >
          </td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.isActive ? 'активен' : 'не активен' }}</td>
          <td>{{ user.balance }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.accessLevel }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.registered }}</td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UsersList',
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
}
</script>
