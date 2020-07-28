<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" to="/"
            ><a class="nav-link">Пользователи</a></router-link
          >
          <router-link tag="li" class="nav-item" to="/contacts"
            ><a class="nav-link">Контакты</a></router-link
          >
          <router-link tag="li" class="nav-item" to="/add-user"
            ><a class="nav-link">Добавить</a></router-link
          >
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#nprogress .bar {
  height: 10px;
}
</style>
