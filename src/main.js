import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.config.productionTip = false;
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    todoItems:[],
    index:0
  },
  getters:{
    getAllTodoItems : state => state.todoItems,
    getActiveTodoItems: state => state.todoItems.filter(item => !item.status),
    getCompleteTodoItems: state => state.todoItems.filter(item => item.status)
  },
  mutations:{
    addTodoItem(state,item){
      state.todoItems.push(item);
    },
    updateItem(state,payLoad){
      state.todoItems[payLoad.item.todoId] = payLoad.item;
    }
  }
});
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
});
