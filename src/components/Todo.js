import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  deleteTodo = (e)=> {
    this.props.deleteTodo(e.target.id);
  }

  render() {
    const { complete, edit, text, id } = this.props;

    const icon = complete ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (
      <li className="list-group-item">
        <span>{text}</span>
        <span
          id={id}
          className="pull-right" 
          onClick={this.deleteTodo}
          style={{ 
            cursor: 'pointer'
          }}
          >{icon}</span>
      </li>
    );
  }
}
