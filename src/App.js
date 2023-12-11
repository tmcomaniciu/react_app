import { useState } from "react";
import Greeting from "./Components/Greeting";

function App() {
  const [user, setUser] = useState(null);
  const data = ["tudor", "rachel"];

  const [counter, setCounter] = useState(0);

  const display = data.map((name, i) => {
    return <Greeting key={i} color={"blue"} mame={name} />;
  });

  const increment = () => {
    setCounter((currentValue) => {
      return currentValue + 1;
    });
  };

  const decrement = () => {
    if (counter === 0) return;
    setCounter((currentValue) => {
      return currentValue - 1;
      //return currentValue > 0 ? currentValue - 1 : 0;
      //return Math.max(0, counter - 1);
    });
  };

  return (
    <div>
      <h3>counter: {counter}</h3>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <br></br>
      <input placeholder="Text" />
      {display}
    </div>
  );
}

export default App;
