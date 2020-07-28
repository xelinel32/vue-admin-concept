<template>
  <nav aria-label="Pagination">
    <ul class="pagination pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a
          class="page-link"
          aria-label="Previous"
          @click="updatePage(currentPage - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in pages"
        :key="page"
        class="page-item"
        :class="{ active: page === currentPage }"
      >
        <a class="page-link" @click="updatePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === pages }">
        <a
          class="page-link"
          aria-label="Next"
          @click="updatePage(currentPage + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'AppPagination',
  model: {
    prop: 'currentPage',
  },
  props: {
    itemsCount: {
      type: Number,
      required: true,
    },
    itemsToShow: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.itemsCount / this.itemsToShow)
    },
  },
  methods: {
    updatePage(page) {
      this.$emit('input', page)
    },
  },
}
</script>
