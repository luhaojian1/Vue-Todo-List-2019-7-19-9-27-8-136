<template>
  <div style="height: 100%;">
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "./components/Header"
  import ListCreation from "./components/ListCreation"
  import BtnFilters from "./components/BtnFilters"
  import todoAdder from "./components/todo-adder"

  export default {
  name: 'App',
  components:{
    ListCreation,
    Header,
    BtnFilters,
    todoAdder
  },
  mounted() {
    this.$store.dispatch('loadToDoItem');
  }
}
</script>

<style>

</style>
