<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <input class="input-text" id="inputInfo" type="text" v-model="toDoInfo">
    <button id="add" v-on:click="addStatus()">Add</button>

    <div>
      <ol>
        <item-todo v-for="(todo,index) in toDos" :key="index" :value="todo"
                   :toDo="todo"
                   @click="changeItem(index,$event)">
        </item-todo>


      </ol>
      <div id="button">
        <div id="filter">

            <button v-for="(filter,i) in filters"
                    :key="i" :value="filter"
                    :class="['btnFilter', { selected: choiceBtn === filter }]"
                    @click=" clickFilterButton(filter)">{{filter}}
            </button>
        </div>
      </div>

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
        todoList: [],
        choiceBtn: 'All',
        filters: ['All', 'Active', 'Complete']
      }
    },
    methods: {
      addStatus() {
        if (this.toDoInfo === '')
        {
          alert("input can not null");
          return;
        }
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

</style>
