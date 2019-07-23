const getters = {

  getTodoItems: state => (choiceBtn) => {
    if (choiceBtn === 'All') {
      return state.todoItems;
    } else if (choiceBtn === 'Active') {
      return state.todoItems.filter(todo => !todo.completed);
    } else if (choiceBtn === 'Complete') {
      return state => state.todoItems.filter(todo => todo.completed);
    }
  },
  getActiveTodoItem: state => state.todoItems.filter(todo => !todo.completed),
  getCompleteTodoItem: state => state.todoItems.filter(todo => todo.completed),
  getItemsLength: state => state.todoItems.length,
  getChoiceBtn: state => state.choiceBtn
};
export default getters;
