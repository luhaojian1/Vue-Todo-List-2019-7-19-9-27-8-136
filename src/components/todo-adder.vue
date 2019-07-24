<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <input class="input-text" id="inputInfo" type="text" :value="toDoInfo" @input="setTodoInfo">
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
          console.log(this.toDoInfo);
          if (this.toDoInfo === '') {
            alert("input can not be null");
            return;
          }
          this.$store.dispatch('addTodoItem', {
            content: this.toDoInfo,
            completed: false
          });
          this.toDoInfo = '';
        },
        setTodoInfo() {
          this.toDoInfo = event.target.value;
        }
      }
    }
</script>

<style>

</style>
