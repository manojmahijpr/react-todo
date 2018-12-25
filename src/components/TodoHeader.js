import React, { Component } from 'react'

class TodoHeader extends Component {

    reloadTodo = ()=> {
        this.props.reloadTodo();
    }

    render () {
        return (
            <div className="margin-bottom-xl">
                <h1 style={{
                        display: 'inline',
                        marginRight: '10px'
                }}>Todos</h1>

                <span 
                    style={{ 
                        fontSize: '27px',
                        cursor: 'pointer'
                    }}
                    className="fa fa-refresh"
                    onClick={this.reloadTodo}
                ></span>
            </div>
        )
    }
}

export default TodoHeader