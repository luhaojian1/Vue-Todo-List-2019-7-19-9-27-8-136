<template>
  <div>
    <div>
      <h1>Jquery To Do List</h1>
      <p><em>Simple ToDo List with adding and filter by diff status.</em></p>
    </div>
    <ListCreation></ListCreation>
  </div>
</template>

<script>
  import ListCreation from "./ListCreation"
  export default {
    name: "ToDoList",
    components:{
      ListCreation
    }

  }
</script>

<style >
  h1{
    margin-left:-100px;
  }
</style>
