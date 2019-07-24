<template>
  <div>
    <li><input type="checkbox" :checked="toDo.completed" @change="changeItem(toDo.completed)">
      <span :class="{ checked: toDo.completed }"
            :contenteditable="editable"
            @dblclick="setEditable(true)"
            @keypress.enter="onEnterPress"
            ref="text">
        {{toDo.content}}
      </span>
      <button @click="deleteItem(toDo.id)">删除</button>
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
      }
    },
    methods: {
      setEditable(editable) {
        this.editable = editable;
      },
      onEnterPress() {
        this.setEditable(false);
        let content = this.$refs.text.innerText;
        this.$store.dispatch('updateItem', {
          id: this.toDo.id,
          completed: this.toDo.completed,
          content: content
        });
      },
      changeItem(completed) {
        console.log(completed);
        this.$store.dispatch('updateItem', {
          id: this.toDo.id,
          completed: !completed,
          content: this.toDo.content
        });
      },
      deleteItem(id) {
        this.$store.dispatch('deleteItem', id);
      }
    }
  }
</script>

<style>
</style>
