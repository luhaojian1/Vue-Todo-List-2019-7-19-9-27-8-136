<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
  <input class="input-text" id="inputInfo" type="text" v-model="toDoInfo">
    <button id="button" v-on:click="addToDoItem">Add</button>
  </div>
</template>

<script>
    export default {
      name: "todo-adder",
      data() {
        return {
          toDoInfo: '',
        }
      },
      methods: {
        addToDoItem() {
          if (this.toDoInfo === '') {
            alert("input can not null");
            return;
          }
          this.$store.dispatch('addTodoItem', {
            id: this.$store.getters.getItemsLength + 1,
            content: this.toDoInfo,
            completed: false
          });
          this.toDoInfo = '';
        },
      }
    }
</script>

<style>

</style>
