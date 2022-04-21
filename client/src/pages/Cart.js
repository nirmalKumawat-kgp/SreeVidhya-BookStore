import React, { useEffect, useState } from "react";
import CartItem from "../components/Cart/CartItem";
import "../components/Cart/CartItem.css";
import API from "../baseUrl";
export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  let subTotal = 0,
    discount = 0,
    total = 0;

  const fetchItems = async () => {
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let cartData = [];
    const { data } = await API.get("cart/", config);
    cartData = await data.data;
    return await cartData;
  };
  // const fetchBooks = async ()=>{
  //   const token = localStorage.getItem("authToken");
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   let cartData = []
  // }
  useEffect(() => {
    fetchItems().then((response) => {
      localStorage.setItem("cartItems", JSON.stringify(response));
      setCartItems(response);
    });
  }, []);
  return (
    <div>
      <h2 style={{ fontSize: "3rem", textAlign: "center" }}> Cart</h2>
      <div
        style={{
          padding: "2rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            padding: "1rem",
          }}
        >
          {cartItems?.map((item, index) => {
            return <CartItem id={item.BookId} key={index} />;
          })}
        </div>
        <div className="totalCost">
          <div className="row">
            <p>SubTotal</p>
            <p>{subTotal}</p>
          </div>
          <div className="row">
            <p>Discount</p>
            <p>{discount.toFixed(2)}</p>
          </div>
          <div className="row" style={{ backgroundColor: "#eee" }}>
            <p>Total</p>
            <p>{total.toFixed(2)}</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              value="sign in"
              className="btn"
              style={{ width: "80%" }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
