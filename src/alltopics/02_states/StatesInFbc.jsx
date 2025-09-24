import { useState } from "react";
const StatesInFbc = () => {


  let [state, setState] = useState("add to cart");
  console.log(state);

  function cartbtn() {
    setState("go to cart")
  }
  return (
    <div>
      <h1>States In Function Based Component</h1>
      <button onClick={cartbtn}>{state}</button>
    </div>
  );
};
export default StatesInFbc;
