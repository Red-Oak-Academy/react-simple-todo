import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoEntry from "./components/TodoEntry";
import NewEntry from "./components/NewEntry";

class App extends Component {

  constructor() {
    super()

    this.state = {
      todos: []
    }
  }

  render() {
    return (
      <div className="container">

        <h1 className="text-center">Meine To-Dos</h1>

        <div className="row py-5">
            <NewEntry
              todoAddedCallback={(newTodo) => this.setState({todos: addTodo(this.state.todos, newTodo)})}
            ></NewEntry>
        </div>

        {this.state.todos.map((todo, index) =>
          <div 
          key={todo.title + index}
          className="row py-2">
            <TodoEntry
              title={todo.title}
              status={todo.status}
              deleteCallback={() => this.setState({todos: deleteTodoWithIndex(this.state.todos, index)})}
              statusChangedCallback={(newStatus) => this.setState({todos: updateTodoStatusOnIndex(this.state.todos, index, newStatus)})}
            ></TodoEntry>
          </div>)}

      </div>
    )
  }
}

function updateTodoStatusOnIndex(todos, idx, newStatus) {
  todos[idx].status = newStatus;
  return todos;
}

function deleteTodoWithIndex(todos, idx) {
  todos.splice(idx, 1);
  return todos;
}

function addTodo(todos, newTodo) {
  todos.push(newTodo);
  return todos;
}

export default App;
