const getters = {
  getAllTodoItems: state => state.todoItems,
  getActiveTodoItems: state => state.todoItems.filter(item => !item.status),
  getCompleteTodoItems: state => state.todoItems.filter(item => item.status)
};
export default getters;
