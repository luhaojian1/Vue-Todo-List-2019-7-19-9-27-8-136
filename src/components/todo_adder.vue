<template>
  <input class="input-text" id="inputInfo" type="text" v-model="toDoInfo">
  <button id="button" v-on:click="addToDoItem()">Add</button>
</template>

<script>
    export default {
      name: "todo_adder",
      data() {
        return {
          toDoInfo: '',
          todoId: 0,

        }
      },
      methods: {
        addToDoItem() {
          if (this.toDoInfo === '') {
            alert("input can not null");
            return;
          }
          let todo = {
            information: this.toDoInfo,
            status: false,
            todoId: this.todoId++
          };
          this.$store.commit('addTodoItem', todo);
          this.toDoInfo = '';
        },
      }
    }
</script>

<style scoped>

</style>
