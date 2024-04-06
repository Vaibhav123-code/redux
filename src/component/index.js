import React from 'react'
import {useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from '../action/actionCreate';

function Redux() {
    const counter = useSelector(state => state.a);
    const dispatch = useDispatch();
    console.log(counter)

  return (
    <div>
        <h1>Counter : { counter}</h1>
        <button onClick={()=> dispatch(increment(100))}>increment</button>
        <button onClick={()=> dispatch(decrement(50))}>decrement</button>
        <button onClick={()=> dispatch(reset())}>reset</button>
    </div>
  )
}

export default Redux