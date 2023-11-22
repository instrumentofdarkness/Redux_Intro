import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { actions } from "../redux/slices/counter";

export default function Counter() {
  const counterValue = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();
  function increment() {
    dispatch(actions.increment());
  }
  function decrement() {
    dispatch(actions.decrement());
  }
  function incrementByTwo() {
    dispatch(actions.incrementByTwo());
  }

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
      <span>{counterValue}</span>
      <button onClick={decrement}>-</button>
      <button onClick={incrementByTwo}>+2</button>
    </div>
  );
}
