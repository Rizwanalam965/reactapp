import { useState, useMemo, useCallback } from "react";
import ChildX from "./ChildX";

const MyComponent = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  // function multiply() {
  //   console.log("multiply");
  //   return add * 5;
  // }

  //! IT RETURNS MEMORIZED VALUE
  let memorizedValue = useMemo(() => {
    console.log("multiply");
    return add * 5;
  }, [add]);

  //   function display(){
  //     console.log("Hello World");
  //   }

  //! IT RETURNS MEMORIZED FUNCTION
  let display = useCallback(() => {
    console.log("Hello World");
  }, []);

  return (
    <div>
      <h1>MyComponent</h1>
      <h2>Addition {add}</h2>
      <button className="bg-red-400" onClick={() => setAdd(add + 1)}>
        Add
      </button>

      <h2>Substraction {minus}</h2>
      <button className="bg-green-400" onClick={() => setMinus(minus - 1)}>
        Minus
      </button>

      <h2>Multiplication {memorizedValue}</h2>

      <ChildX display={display} />
    </div>
  );
};

export default MyComponent;
