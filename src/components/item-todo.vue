<template>
  <div>
    <li><input type="checkbox" :checked="toDo.status" v-model="toDo.status" @change="checkChange" >
      <span :class="{ checked: toDo.status }">
        {{toDo.information}} - {{toDo.status}}
      </span>
    </li>
  </div>
</template>

<script>
  export default {
    name: "item-todo",
    props: {
      toDo: Object
    },
    methods: {

      checkChange() {
        this.$emit('change');
      }

    }
  }
</script>

<style>
  label {
    margin-left: -210px;
    font-size: 24px;
  }
</style>
