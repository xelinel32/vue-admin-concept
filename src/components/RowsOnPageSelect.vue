<template>
  <div class="form-group row">
    <div class="col-sm-1">
      <select
        :value="value"
        class="form-control form-control-sm"
        @change="updateValue"
      >
        <option>5</option>
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
    </div>
    <label
      for="exampleFormControlSelect1"
      class="col-sm-2 col-form-label col-form-label-sm"
      >cтрок на странице</label
    >
  </div>
</template>

<script>
export default {
  name: 'RowsOnPageSelect',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  methods: {
    updateValue(e) {
      this.$emit('input', +e.target.value)
    },
  },
}
</script>
