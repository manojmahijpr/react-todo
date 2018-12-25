import dispatcher from '../dispatcher/dispatcher';

export function createTodo(text) {
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        text
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id
    });
}

export function reloadTodo() {
    dispatcher.dispatch({
        type: 'FETCH_TODOS'
    });
    setTimeout(()=> {
        dispatcher.dispatch({
            type: 'RECEIVE_TODOS',
            todos: [
                {
                    id: 78542361,
                    text:'Learning React',
                    complete: true
                },
                {
                    id: 80819236,
                    text:'Building Projects',
                    complete: false,
                }
            ]
        })
    }, 500);
}