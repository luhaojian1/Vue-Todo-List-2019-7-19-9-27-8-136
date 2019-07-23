<template>
  <div id="home" class="home">
    <nav>
      <button @click="callBack">×</button>
      <h2>{{ userName }}</h2>
      <ul>
        <li><a href="javaScript:void" @click="enterTodoList">TodoList</a></li>
        <li><a href="javaScript:void" @click="enterProfile">Profile</a></li>
      </ul>
    </nav>
    <router-view id="mainContent"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        userName: ''
      }
    },
    beforeMount() {
      this.userName = this.$route.params.userName
    },
    methods: {
      callBack() {
        this.$router.push('/')
      },
      enterTodoList() {
        this.$router.push(this.userName)
      },
      enterProfile() {
        this.$router.push(this.userName + '/profile')
      }
    }
  }

</script>

<style scoped>

</style>
