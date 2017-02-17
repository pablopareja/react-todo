var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try{
      todos = JSON.parse(stringTodos);
    }catch(e){

    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText){
    var filterTodos = todos;

    //filter by showCompleted
    filterTodos = filterTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //filter by searchText
    filterTodos = filterTodos.filter((todo) => {
      return (searchText.length === 0) || (todo.text.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
    });

    //sort todos with non-completed first
    filterTodos.sort((a,b) => {
      if(!a.completed && b.completed){
        return -1;
      }else if(a.completed === b.completed){
        return 0;
      }else{
        return 1;
      }
    });

    return filterTodos;
  }
}
