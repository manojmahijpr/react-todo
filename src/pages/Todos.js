import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import AddTodo from "../components/AddTodo";

import * as TodoActions from '../actions/TodoActions';
import TodoHeader from "../components/TodoHeader";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos)
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this.getTodos)
  }

  getTodos = ()=> {
    this.setState({
      todos: TodoStore.getAll(),
    })
  }

  createTodo = (text)=> {
    TodoActions.createTodo(text);
  }

  deleteTodo = (id)=> {
    TodoActions.deleteTodo(id);
  }

  reloadTodo = ()=> {
    TodoActions.reloadTodo();
  }

  render() {
    const { todos } = this.state;
    
    const TodoComponents = todos.map((todo) => {
        return <Todo deleteTodo={this.deleteTodo} key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <TodoHeader reloadTodo={this.reloadTodo} />
        <br/>
        <AddTodo createNewtodo={this.createTodo}/>
        <br/>
        <div>
          <ul className="list-group">{TodoComponents}</ul>
        </div>
        
      </div>
    );
  }
}
