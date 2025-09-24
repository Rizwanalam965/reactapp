import { createContext } from "react";

export const GLOBAL_CONTEXT = createContext();

const Context2 = (x) => {
  console.log(x);//{children:[{},{}]}
  
  const data = "Hello World";

  return (
    <GLOBAL_CONTEXT.Provider value={data}>{x.children}</GLOBAL_CONTEXT.Provider>
  );
};

export default Context2;
