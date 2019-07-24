<template>
  <div id="home" class="home">
    <nav>
      <button @click="callBack">×</button>
      <h2>{{ userName }}</h2>
      <ul>
        <li><a href="" @click="enterTodoList">TodoList</a></li>
        <li><a href="#" @click="enterProfile">Profile</a></li>
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
        let isBack = window.confirm("back?");
        if (isBack) {
          this.$router.push('/');
        }

      },
      enterTodoList() {
        this.$router.push({path: '/home/todoList'});
        return;
      },
      enterProfile() {
        this.$router.push({path: '/home/profile'})
        return;
      }
    }
  }

</script>

<style scoped>

</style>
