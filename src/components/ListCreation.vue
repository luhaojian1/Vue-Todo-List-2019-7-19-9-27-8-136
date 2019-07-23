<template xmlns:v-on="http://www.w3.org/1999/xhtml">
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
      toDos() {
        return this.$store.getters.getTodoItems;
      }
    },
  }
</script>

<style>

</style>
