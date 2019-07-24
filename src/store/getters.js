const getters = {
  getTodoItems: state => {
    switch (state.choiceBtn) {
      case 'All':
        return state.todoItems;
      case 'Active':
        return state.todoItems.filter(item => !item.completed);
      case 'Complete':
        return state.todoItems.filter(item => item.completed);
      default:
        return state.todoItems;
    }
  },
  getUser: state => state.user,
};
export default getters;
