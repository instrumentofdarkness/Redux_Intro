import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="App">
      <h1> Redux Toolkit</h1>
      <Counter />
      <p>result: {counterValue}</p>
    </div>
  );
}

export default App;
