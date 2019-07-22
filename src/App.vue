<template>
  <div id="app" class="container">
    <Header></Header>
   <ListCreation></ListCreation>
  </div>
</template>

<script>
  import Header from "./components/Header"
  import ListCreation from "./components/ListCreation"
export default {
  name: 'App',
  components:{
    ListCreation,
    Header
  }
}
</script>

<style>

</style>
