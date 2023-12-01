import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

function App() {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="App">
      <h3> Redux Toolkit</h3>
      <Counter />
      <Child1/>
      <Child2/>
      <p>result: {counterValue}</p>
    </div>
  );
}

export default App;
