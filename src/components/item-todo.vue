<template>
  <div>
    <li><input type="checkbox" :checked="toDo.status" v-model="toDo.status"  >
      <span :class="{ checked: toDo.status }">
        {{toDo.information}}
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
  }
</script>

<style>
</style>
