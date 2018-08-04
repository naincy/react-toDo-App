import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import React, {Fragment} from 'react';

function TodoApp(state = {}, action) {
    switch(action.type) {
        case 'add':
            return {...state, items: [...state.items, action.items]}
        default:
            return state;
    }
}



const store = createStore(TodoApp, {
    items: [
        "bdskjbd",
        "sbmnd"
    ]
});

let inputEle = null;
function addItem(e) {
    e.preventDefault();
    const inp = inputEle.value;
    store.dispatch({
        type: 'add',
        items: inp
    });
}

store.subscribe(() => {

    const {items} = store.getState();
    ReactDOM.render(<Fragment> 
        <form onSubmit={addItem}>
            <input type="text" className="form-control" ref={ node => inputEle = node }/>
            <input type="submit" className="btn btn-primary" value="Go"/>
        </form>
        <h2> Action Items </h2>
        <ul>
            {items.map(i => <li key={i}>{i}</li>)}
        </ul>
        </Fragment>, document.getElementById('appTodo') );
});
store.dispatch({type: 'DEFAULT'});