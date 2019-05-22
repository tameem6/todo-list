import React from 'react';
import Todos from './todos.js'
import AddTodo from './addItem';
class App extends React.Component {
  state = { 
    todos : [
      {id : 1, content : 'Do laundry'},
      {id : 2, content : 'Make lunch'}
    ]
  }
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todos =>{
      return todos.id !== id;
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos :todos
    })
  }
  render () { 
    return(
    <div className="App container">
      <h1 className = "text-center text-primary">To-do List</h1>
      <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
      <AddTodo addTodo = {this.addTodo}/>
    </div>
  );
}
}
export default App;
