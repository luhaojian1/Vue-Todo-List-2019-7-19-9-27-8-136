<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <input class="input-text" id="inputInfo" type="text" v-model="toDoInfo">
    <button id="button" v-on:click="addToDoItem()">Add</button>

    <div>
      <ol>
        <item-todo v-for="(todo,index) in toDos" :key="index" :value="todo"
                   :toDo="todo"
                   @click="changeItem(todo)">
        </item-todo>
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
      changeItem(item) {
        this.$store.commit('updateItem', {
          item: item
        });
      }
    },
    computed: {
      toDos() {
        switch (this.$store.state.choiceBtn) {
          case 'All':
            return this.$store.getters.getAllTodoItems;
          case 'Active':
            return this.$store.getters.getActiveTodoItems;
          case "Complete":
            return this.$store.getters.getCompleteTodoItems;
          default:
            return this.$store.getters.getAllTodoItems;
        }
      }
    },
  }
</script>

<style>

</style>
