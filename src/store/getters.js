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
  getChoiceBtn: state => state.choiceBtn,
};
export default getters;
