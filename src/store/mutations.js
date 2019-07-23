const mutations = {
  addTodoItem(state, item) {
    state.todoItems.push(item);
  },
  updateTodoItem(state, item) {
    state.todoItems[item.id - 1] = item;
  },
  loadTodoItem(state, payload) {
    state.todoItems = payload.item;
  },
  updateChoiceBtn(state, filter) {
    state.choiceBtn = filter;
  }
};
export default mutations;
