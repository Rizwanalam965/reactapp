import React, { useState } from "react";
import ChildA from "./ChildA";

const ParentA = () => {
  console.log("parent A component");

  const [add, setAdd] = useState(0);

  const update = () => setAdd(add + 1);

  return (
    <div>
      <h1>
        ParentA - {add}
        <button onClick={update}>update</button>
      </h1>
      <ChildA />
    </div>
  );
};

export default ParentA;
