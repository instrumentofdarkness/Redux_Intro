import React from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../redux/slices/counter";
import { productActions } from "../redux/slices/product";

export default function Child2() {
  const dispatch = useDispatch();
  function increment() {
    dispatch(counterActions.increment());
  }
  function decrement() {
    dispatch(counterActions.decrement());
  }

  function changeName() {
    dispatch(productActions.changeName());
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={changeName}>changed name</button>
    </div>
  );
}
