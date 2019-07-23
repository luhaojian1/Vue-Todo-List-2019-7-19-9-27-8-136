<template>
  <div>
    <li><input type="checkbox" :checked="toDo.completed" v-model="toDo.completed">
      <span :class="{ checked: toDo.completed }"
            :contenteditable="editable"
            @dblclick="setEditable(true)"
            @keypress.enter="onEnterPress"
            ref="text">
        {{toDo.content}}
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
        editable: false
      }
    },
    methods: {
      setEditable(editable) {
        this.editable = editable;
      },
      onEnterPress() {
        this.setEditable(false);
        this.toDo.content = this.$refs.text.innerText;

      }
    }
  }
</script>

<style>
</style>
