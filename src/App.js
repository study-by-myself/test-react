import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState([]);
  const [count, setCount] = useState(-1);
  const [inputText, setInputText] = useState("");

  useEffect(() => {}, state);

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const onPlusHandler = () => {
    const list = [...state, inputText];
    setState(list);
    setCount((count) => count + 1);
    setInputText("");
  };

  const onMinusHandler = (e, index) => {
    const a = state[index];
    const list = state.filter((i) => i !== a);
    setState([...list]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" onChange={onChangeHandler} value={inputText} />
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
