import { useState } from "react";
const CounterInFbc = () => {
  let [count, setCount] = useState(0);

  let incre = () => setCount(count + 1);
  return (
    <div>
      <h1>Counter in Function Based Component</h1>

      <h2>Count : {count}</h2>
      <button onClick={incre}>increment</button>
      <button>decrement</button>
      <button>reset</button>
    </div>
  );
};
export default CounterInFbc;
