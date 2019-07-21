<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <input id="inputInfo" type="text" v-model="toDoInfo">
    <button id="add" v-on:click="addStatus()">Add</button>

    <div>
      <ol>
        <ToDoInformation v-for="(todo,index) in toDos" v-bind:key="index" v-bind:value="todo"
                         :toDo="todo"
                         v-on:click="changeItem(index,$event)">
        </ToDoInformation>


      </ol>
      <div id="filters">
        <button v-for="(filter,i) in filters"
                :key="i" :value="filter"
                :class="['btnFilter', { selected: choiceBtn === filter }]"
                @click=" clickFilterButton(filter)">{{filter}}
        </button>
      </div>

    </div>
  </div>
</template>

<script>
  import ToDoInformation from "./StatusInfo"

  export default {
    name: "ListCreation",
    components: {
      ToDoInformation
    },
    data() {
      return {
        toDoInfo: '',
        todoList: [],
        choiceBtn: 'All',
        filters: ['All', 'Active', 'Complete']
      }
    },
    methods: {
      addStatus() {
        let todo = {
          information: this.toDoInfo,
          status: false
        };
        this.todoList.push(todo);
        this.toDoInfo = '';
      },
      clickFilterButton(filter) {
        this.choiceBtn = filter;
      },
      changeItem(index, item) {
        this.$set(this.todoList, index, item);
      }
    },
    computed: {
      toDos() {
        switch (this.choiceBtn) {
          case 'All':
            return Array.from(this.todoList);
          case 'Active':
            return this.todoList.filter(todo => !todo.status);
          case 'Complete':
            return this.todoList.filter(todo => todo.status);
        }
        return this.todoList;
      }
    },
  }
</script>

<style>
  input {
    margin-left: -150px;
  }

  button {
    margin: 10px;
    font-color: blue
  }
</style>
