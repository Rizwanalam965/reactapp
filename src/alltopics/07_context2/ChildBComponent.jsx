import { useContext } from "react";
import { GLOBAL_CONTEXT } from "./Context2";

const ChildBComponent = () => {

  let val = useContext(GLOBAL_CONTEXT)
  
  return (
    <div>
      <h1>ChildBComponent {val}</h1>
    </div>
  );
};

export default ChildBComponent;
