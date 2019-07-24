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
  {path: '/', name: 'main', component: main},
  {
    path: '/home',
    name: 'home',
    component: home,
    redirect: 'todoList',
    children: [
      {path: 'todoList', name: 'todoList', component: todoList},
      {path: 'profile', name: 'profile', component: profile},
    ]
  }
];

const router = new Router({
  routes: routes
});
export default router;
