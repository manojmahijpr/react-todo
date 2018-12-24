import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import AddTodo from "../components/AddTodo";

import * as TodoActions from '../actions/TodoActions';

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", ()=> {
      this.setState({
        todos: TodoStore.getAll(),
      })
    })
  }

  createTodo = (text)=> {
    TodoActions.createTodo(text);
  }

  deleteTodo = (id)=> {
    TodoActions.deleteTodo(id);
  }

  render() {
    const { todos } = this.state;
    
    const TodoComponents = todos.map((todo) => {
        return <Todo deleteTodo={this.deleteTodo} key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <AddTodo createNewtodo={this.createTodo}/>
        <br/>
        <div>
          <ul className="list-group">{TodoComponents}</ul>
        </div>
        
      </div>
    );
  }
}
