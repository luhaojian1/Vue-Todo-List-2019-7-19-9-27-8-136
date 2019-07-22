<template>
  <div>
    <li><input type="checkbox" :checked="toDo.status" v-model="toDo.status">
      <span :class="{ checked: toDo.status }"
            :contenteditable="editable"
            @dblclick="setEditable(true)"
            @keypress.enter="onEnterPress"
            ref="text">
        {{toDo.information}}
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
        this.toDo.information = this.$refs.text.innerText;

      }
    }
  }
</script>

<style>
</style>
