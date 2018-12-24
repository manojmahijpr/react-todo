import React, { Component } from 'react'

class AddTodo extends Component {

    handleSubmit = (e)=> {
        e.preventDefault();

        const todoText = e.target.todoinput.value;
        this.props.createNewtodo(todoText);
        
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-sm-11">
                        <input type="text" className="form-control" id="todoinput" placeholder="Enter Todo Text Here"/>
                        </div>
                        <div className="col-sm-1">
                        <input type="submit" className="form-control btn btn-success" value="add"/>
                        </div>
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo