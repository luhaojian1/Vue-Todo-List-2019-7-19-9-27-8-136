<template>
  <div id="main" class="main-container">
    <div class="container">
      <div style="margin: 100px">
        <a-avatar size="large" icon="user"/>
      </div>

      <label for="name"><input id="name" type="text" placeholder="请输入姓名" v-model="userName"></label>
      <a-button type="primary" @click="enterHome">Enter</a-button>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        userName: ''
      }
    },
    methods: {
      enterHome() {
        if (this.userName === '') {
          alert(`input can not be null`);
          return;
        }
        this.$router.push(`/home/todoList`);
      }
    }
  }
</script>

<style>

</style>
