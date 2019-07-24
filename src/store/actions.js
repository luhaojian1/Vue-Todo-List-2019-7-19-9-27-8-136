import axios from 'axios'


const url = 'http://localhost:3001/todos';

const actions = {
  addTodoItem({commit}, payload) {
    axios.post(url, payload)
      .then(response => {
        commit('addTodoItem', response.data);
      })
      .catch(error => console.log(error));
  },
  loadToDoItem({commit}) {
    axios.get(url)
      .then(response => {
        commit('loadTodoItem', {item: response.data})
      })
  },
  updateItem({commit, dispatch}, item) {
    console.log("更新前：" + item.completed);
    axios.put(`${url}/${item.id}`, item)
      .then(response => {
        console.log("更新后：" + response.data.completed);
        commit('updateTodoItem', response.data);
      })
      .catch(error => {
        console.log(error)
      });
  },
  deleteItem({commit, dispatch}, id) {
    axios.delete(`${url}/${id}`)
      .then(response => {
        console.log(response.data);
        commit('deleteTodoItem', id);
      })
      .catch(error => {
        console.log(error)
      });
  },


};
export default actions;
