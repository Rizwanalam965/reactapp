import { useReducer } from "react";

let initialState = 0;

function reducerFunc(prevState, action) {
  switch (action) {
    case "increment":
      return prevState + 1;

    case "decrement":
      return prevState - 1;

    case "reset":
      return 0;
  }
}

const Reducer = () => {
  let [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div>
      <h1>Reducer {state}</h1>
      <button className="mx-3" onClick={() => dispatch("increment")}>
        increment
      </button>
      <button className="mx-3" onClick={() => dispatch("decrement")}>
        decrement
      </button>
      <button className="mx-3" onClick={() => dispatch("reset")}>
        reset
      </button>
    </div>
  );
};

export default Reducer;
