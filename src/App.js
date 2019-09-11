import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';


function App() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()


  //ACTIONS
  const increment = (nbr = 1) => {
    return {
        type:'INCR',
        playload:nbr
    }
  }
  const decrement = () => {
    return {
        type:'DECR'
    }
  }



  return (
    <div className="App">
      APP <br />
       <button onClick={() => dispatch(increment())}>+</button> <br />
       <button onClick={() => dispatch(increment(5))}>+5</button> <br />
       {counter} <br />
       <button onClick={() => dispatch(decrement())}>-</button> 
      
    </div>
  );
}

export default App;
