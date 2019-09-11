import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App'; 
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'



//REDUCER
const counter = (state = 0,action) =>{
    switch(action.type){
        case "INCR" : {
            return state + action.playload
        }
        case "DECR" : {
            return state - 1
        }
        default:{
            return state
        }
    }
         
}

//STORE
let store = createStore(
    combineReducers({
        counter:counter
    })
    /*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
);

 
 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , 
    document.getElementById('root'));
 
