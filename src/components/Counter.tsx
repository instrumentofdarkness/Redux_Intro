import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { counterActions } from "../redux/slices/counter";

export default function Counter() {
  const counterValue = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();
  function increment() {
    dispatch(counterActions.increment());
  }
  function decrement() {
    dispatch(counterActions.decrement());
  }
  function incrementByTwo() {
    dispatch(counterActions.incrementByTwo(5));
  }

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={decrement}>-</button>
      <span> </span>
      <span>{counterValue}</span>
      <span> </span>
      <button onClick={increment}>+</button>
      <span> </span>
      <button onClick={incrementByTwo}>+2</button>
    </div>
  );
}
