import { createContext } from "react";
import ParentA1 from "./ParentA1";
// create a context
export const contextObject = createContext();

const MyContext = () => {
  console.log(contextObject); //{Provider:{$$type:....}}

  let user = {
    id: 1,
    ename: "John",
  };

  return (
    <contextObject.Provider value={user}>
      <ParentA1 />
    </contextObject.Provider>
  );
};

export default MyContext;
