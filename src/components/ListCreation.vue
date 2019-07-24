<template>
  <div>

    <div>
      <ol>
        <itemTodo v-for="(todo,index) in toDos" :key="index" :value="todo"
                  :toDo="todo">
        </itemTodo>
      </ol>
    </div>

  </div>


</template>

<script>
  import itemTodo from "./item-todo"

  export default {
    name: "ListCreation",
    components: {
      itemTodo
    },
    computed: {
      toDos: function () {
        return this.$store.getters.getTodoItems;
      }
    },
  }
</script>

<style>

</style>
