import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { counterActions } from "../redux/slices/counter";
import { productActions } from "../redux/slices/product";

export default function Child2() {
  const counterValue = useSelector((state: RootState) => state.counter.value);
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

  return <div>
    <button onClick={decrement}>-</button>
    <button onClick={changeName}>changed name</button>

  </div>;

}
