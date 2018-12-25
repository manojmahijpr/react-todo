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

    const isCompleteIcon = complete ? "fa fa-check" : "fa fa-times"

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
        <div className="pull-right">
          <span
            id={id}
            className="fa fa-trash"
            onClick={this.deleteTodo}
            style={{ 
              cursor: 'pointer',
              color: 'red',
              paddingRight: '10px'
            }}></span>
          <span
            className={`${isCompleteIcon}`}
            style={{ 
              cursor: 'pointer',
              color: 'gray'
            }}></span>
            
        </div>
        
      </li>
    );
  }
}
