import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState([]);
  const [count, setCount] = useState(-1);

  useEffect(() => {}, state);

  const onPlusHandler = () => {
    const list = [...state, count + 1];
    setState(list);
    setCount((count) => count + 1);
  };

  const onMinusHandler = (e, index) => {
    const a = state.indexOf(index);
    const list = state.filter((i) => i !== a);
    console.log(state);
    console.log(list);
    console.log(index);
    console.log(a);
    setState([...list]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={onPlusHandler}>+</button>
        <div>
          {" "}
          {state.map((item, index) => (
            <button key={index} onClick={(e) => onMinusHandler(e, index)}>
              {item}
            </button>
          ))}{" "}
        </div>
      </header>
    </div>
  );
}

export default App;
