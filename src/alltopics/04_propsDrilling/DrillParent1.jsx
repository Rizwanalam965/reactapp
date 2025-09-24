import React from "react";
import DrillChild1 from "./DrillChild1";

const DrillParent1 = () => {
  let data = "Hii";

  return (
    <div>
      <h1>DrillParent1</h1>

      <DrillChild1 data={data} />
    </div>
  );
};

export default DrillParent1;
