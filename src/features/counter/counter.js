import React from "react";
import '../../style.css'
import {useSelector,useDispatch} from 'react-redux'
import {increment ,decrement} from './counterSlice'

const Counter = () => {
  const state = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h2>counter app</h2>
      <button onClick={() => dispatch(increment())}>Add</button>
      <p>{state}</p>
      <button onClick={() => dispatch(decrement())}>Remove</button>
    </div>
  );
}

export default Counter;
