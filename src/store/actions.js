import axios from 'axios'

const url = 'http://localhost:3001/todos';

const actions = {
  addTodoItem({commit}, payload) {
    axios.post(url, payload)
      .then(response => {
        console.log(response.data);
        commit('addTodoItem', response.data);
      })
      .catch(error => console.log(error));
  },
  loadToDoItem({commit}) {
    axios.get(url)
      .then(response => {
        console.log(response.data);
        commit('loadTodoItem', {item: response.data})
      })
  },
  updateItem({commit}, item) {
    axios.put(`${url}/${item.id}`, item)
      .then(response => {
        commit('updateTodoItem', response.data);
      })
      .catch(error => {
        console.log(error)
      });
  }
};
export default actions;
