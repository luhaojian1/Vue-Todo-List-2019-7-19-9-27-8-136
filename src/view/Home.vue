<template>
  <div>
    <a-layout id="components-layout-demo-custom-trigger">

      <a-layout-header style="background: black; padding: 0">
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            <a-button-group>
              <a-button type="primary" @click="callBack">
                <a-icon type="left"/>
                back
              </a-button>
            </a-button-group>
          </a-menu-item>
          <a-menu-item key="2" type="right">
            <a-icon type="user"/>
          </a-menu-item>

        </a-menu>


      </a-layout-header>


      <a-layout>
        <a-layout-sider>
          <div class="logo"/>
          <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
            <a-menu-item key="1">
              <a-icon type="user"/>
              <span> <router-link to="/home/todoList">TodoList列表</router-link></span>
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="video-camera"/>
              <span> <router-link to="/home/profile">我的</router-link></span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#ccc', minHeight: '280px' }">
          <router-view id="mainContent"></router-view>
        </a-layout-content>

      </a-layout>
    </a-layout>
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
    }
  }

</script>

<style>
  a {
    color: white;
  }

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }


</style>
