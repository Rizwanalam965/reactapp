import React from "react";

const Child4 = (props) => {
  console.log(props);

  const handlebtn = () => {
    console.log("Btn Clicked");
    props.getData("Welcome");
  };
    
  return (
    <div>
      <h2>Child4</h2>
      <button onClick={handlebtn}>click</button>
    </div>
  );
};

export default Child4;
