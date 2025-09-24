import React from "react";

const ChildX = (props) => {
  console.log("Child X");

  return <div>ChildX</div>;
};

export default React.memo(ChildX);
