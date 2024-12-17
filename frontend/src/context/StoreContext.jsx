import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
export const StoreProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addItems = (id) => {
    if (!cartItems[id]) setCartItems((prev) => ({ ...prev, [id]: 1 }));
    else setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const removeItems = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  const subTotal = () => {
    let total = 0;

    for (const item in cartItems)
      if (cartItems[item]) total += food_list[item - 1].price * cartItems[item];

    return total;
  };
  const contextValue = {
    food_list,
    addItems,
    removeItems,
    cartItems,
    setCartItems,
    subTotal,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
