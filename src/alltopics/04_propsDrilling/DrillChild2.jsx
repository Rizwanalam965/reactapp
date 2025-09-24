import React from "react";

const DrillChild2 = (props) => {
  console.log(props); //{data2:"Hii"}

  return (
    <div>
      <h1>DrillChild2 {props.data2}</h1>
    </div>
  );
};

export default DrillChild2;


