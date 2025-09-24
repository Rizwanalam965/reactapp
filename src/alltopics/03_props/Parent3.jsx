import { useState } from "react";
import Child3 from "./Child3";

const Parent3 = () => {
  const [state, setState] = useState("");


  function getDatafromChild(data) {
    console.log(data); // --> from Child3 component --> Hii from Child 3
    setState(data); // storing data to state to display on UI
  }


  return (
    <div>
      <h1>Parent 3 {state}</h1>
      <Child3 getData={getDatafromChild} />
    </div>
  );
};
export default Parent3;
