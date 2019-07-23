import Vue from 'vue'
import Router from 'vue-router'
import Profile from '../view/Profile'
import Main from '../view/Main'
import Home from '../view/Home'
import TodoList from '../view/todoList'

const todoList = TodoList;
const main = Main;
const home = Home;
const profile = Profile;

Vue.use(Router);
const routes = [
  {path: '/', component: main},
  {
    path: '/home/:userName', component: home,
    children: [
      {path: '/home/:userName', component: todoList},
      {path: '/home/:userName/profile', component: profile},
    ]
  }
];

const router = new Router({
  routes
});
export default router;
