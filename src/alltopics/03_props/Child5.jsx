import React from "react";

const Child5 = (props) => {
  
    function handlebtn() {
    props.setState("Welcome");
  }

  return (
    <div>
      <h1>Child5</h1>
      <button onClick={handlebtn}>click</button>
    </div>
  );
};

export default Child5;
