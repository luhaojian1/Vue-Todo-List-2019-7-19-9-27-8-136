const mutations = {
  addTodoItem(state, item) {
    state.todoItems.push(item);
  },
  updateItem(state, payLoad) {
    state.todoItems[payLoad.item.id] = payLoad.item;
  },
  loadTodoItem(state, payload) {
    this.state.todoItems[payload.item.id] = payload.item;
  }
};
export default mutations;
