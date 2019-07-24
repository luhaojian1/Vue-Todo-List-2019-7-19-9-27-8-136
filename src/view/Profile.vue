<template>
  <div id="home" class="container">


    <img alt="personal photo" src="../assets/logo.png">
    <p>姓名:{{userName}}</p>
    <p>电话:13854891689</p>


  </div>

</template>

<script>
  import {Avatar} from 'antd';
  export default {
    name: "profile",
    components: {
      Avatar
    },
    data() {
      return {
        userName: this.$store.getters.getUser,
      }
    }
  }
</script>

<style>
  img {
    margin-left: 20%;
  }

  p {
    margin-left: 30%;
  }
</style>
