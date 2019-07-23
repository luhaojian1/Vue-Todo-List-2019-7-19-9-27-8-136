const getters = {

  getTodoItems: state => {
    if (state.choiceBtn === 'All') {
      return state.todoItems;
    } else if (state.choiceBtn === 'Active') {
      return Array.from(state.todoItems).filter(todo => !todo.completed);
    } else if (state.choiceBtn === 'Complete') {
      return state => Array.from(state.todoItems).filter(todo => todo.completed);
    }
  },
  getActiveTodoItem: state => state.todoItems.filter(todo => !todo.completed),
  getCompleteTodoItem: state => state.todoItems.filter(todo => todo.completed),
  getItemsLength: state => state.todoItems.length,
  getChoiceBtn: state => state.choiceBtn
};
export default getters;
