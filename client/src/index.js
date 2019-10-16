import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

// let store = createStore(reducer)

//STORE (storage)

//ACTION (describes what the store does)(function that returns object)
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

//REDUCER (describes how actions change state)
const counter = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
                return state + 1;
        case 'DECREMENT':
                return state - 1;
        }
}

let store = createStore(counter);

//console log
store.subscribe(() => console.log(store.getState()))

//DISPATCH (performs state change)
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
