<template>
  <div>
    <li><input type="checkbox" :checked="todo.completed" v-model="todo.completed" @change="changeItem">
      <span :class="{ checked: todo.completed }"
            :contenteditable="editable"
            @dblclick="setEditable(true)"
            @keypress.enter="onEnterPress"
            ref="text">
        {{todo.content}}
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
    data() {
      return {
        editable: false,
        todo: {
          id: this.toDo.id,
          content: this.toDo.content,
          completed: this.toDo.completed
        }
      }
    },
    methods: {
      setEditable(editable) {
        this.editable = editable;
      },
      onEnterPress() {
        this.setEditable(false);
        this.todo.content = this.$refs.text.innerText;
        this.$store.dispatch('updateItem', this.todo);
      },
      changeItem() {
        this.$store.dispatch('updateItem', this.todo);
      }
    }
  }
</script>

<style>
</style>
