<template>
  <div id="main" class="main-container">
    <div>
      <label for="name"><input id="name" type="text" placeholder="请输入姓名" v-model="userName"></label>
    </div>
    <div>
      <button id="start" @click="enterHome">开始使用</button>
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
        this.$router.push({path: `/home/${this.userName}`})
      }
    }
  }
</script>

<style>

</style>
