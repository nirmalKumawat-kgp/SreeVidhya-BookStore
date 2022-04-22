import React, { useContext, useState } from "react";

const Cart = React.createContext();

export default function CartContext({ children }) {
  const [cartDetails, setCartDetails] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  // const [user, setUser] = useState(null);

  return (
    <Cart.Provider
      value={{
        cartDetails,
        setCartDetails,
        subTotal,
        setSubTotal,
        discount,
        setDiscount,
        total,
        setTotal,
      }}
    >
      {children}
    </Cart.Provider>
  );
}

export const CartState = () => {
  return useContext(Cart);
};
