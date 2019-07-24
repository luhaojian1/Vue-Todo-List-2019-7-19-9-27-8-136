const mutations = {
  addTodoItem(state, item) {
    state.todoItems.push(item);
  },
  loadTodoItem(state, payload) {
    console.log(payload.item);
    state.todoItems = payload.item;
  },
  updateChoiceBtn(state, filter) {
    state.choiceBtn = filter;
  },
  updateTodoItem(state, todoItem) {
    let index = state.todoItems.findIndex(item => item.id === todoItem.id);
    state.todoItems.splice(index, 1, todoItem);
  },
  deleteTodoItem(state, todoItemId) {
    console.log(todoItemId);
    let index = state.todoItems.findIndex(item => item.id === todoItemId);
    state.todoItems.splice(index, 1);
  },
};


export default mutations;
