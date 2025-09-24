import React from "react";
import { useContext } from "react";
import { GLOBAL_CONTEXT } from "./Context2";

const Cart = () => {
  let val = useContext(GLOBAL_CONTEXT);

  return <div>Cart {val}</div>;
};

export default Cart;
