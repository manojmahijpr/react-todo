import {EventEmitter}  from 'events';
import dispatcher from '../dispatcher/dispatcher';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 123321653,
                text:'Go Shopping',
                complete:false
              },
            {
            id: 908870362,
            text:'Pay Water Bills',
            complete:false
            }
        ]
    }

    createTodo(text) {
        const id = Date.now()

        this.todos.push({
            id,
            text,
            complete: false
        });
        this.emit("change")
    }

    deleteTodo(id) {
        
        for(var i=0;i<this.todos.length; i++) {
            if(this.todos[i].id === parseInt(id)) {
                this.todos.splice(i,1);
                break;
            }
        }
        this.emit("change")
    }

    getAll() {
        return this.todos;
    }

    handleActions(action) {
        switch (action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text)
                break;
            }
            case "DELETE_TODO": {
                this.deleteTodo(action.id)
                break;
            }
            default:
                console.log('invalid Action', action.type);
                break;
        }
    }

}

const todoStore = new TodoStore()
dispatcher.register(todoStore.handleActions.bind(todoStore))
//window.dispatcher = dispatcher
export default todoStore;