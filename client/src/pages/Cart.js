import React, { useEffect, useState } from "react";
import CartItem from "../components/Cart/CartItem";
import "../components/Cart/CartItem.css";
import API from "../baseUrl";
import { CartState } from "../CartContext";
import { Backdrop, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const {
    // cartDetails,
    setCartDetails,
    subTotal,
    discount,
    setSubTotal,
    setDiscount,
    total,
    setTotal,
  } = CartState();
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchItems = async () => {
    let cartData = [];
    const { data } = await API.get("cart/", config);
    cartData = await data.data;
    return await cartData;
  };
  //delete a cart item
  const handleDelete = async (BookId) => {
    setLoading(true);
    const { data } = await API.delete(`cart/removeItem/${BookId}`, config);
    if (data.success) {
      await fetchItems().then((response) => {
        localStorage.setItem("cartItems", JSON.stringify(response));
        setCartItems(response);
        setCartDetails(response);
        setLoading(false);
      });
      await fetchCartCost();
    }
  };
  //send updated quantity to server
  const handleQuantity = async (BookId, value) => {
    setLoading(true);
    const cartItem = cartItems.find((item) => item.BookId === BookId);
    console.log("Ok");
    if (cartItem) {
      const { data } = await API.put(
        "cart/updateItem",
        {
          BookId: cartItem.BookId,
          CartId: cartItem.CartId,
          quantity: value,
        },
        config
      );
      console.log(data);
      fetchCartCost();
      await fetchItems().then((response) => {
        localStorage.setItem("cartItems", JSON.stringify(response));
        setCartItems(response);
        setCartDetails(response);
        setLoading(false);
      });
    }
  };
  //get cart cost
  const fetchCartCost = async () => {
    const { data } = await API.get("cart/getCartCost", config);
    setSubTotal(data.data.subtotal);
    setDiscount(data.data.discount);
    setTotal(data.data.total);
  };
  const handleCheckout = () => {
    navigate("/checkout");
  };
  useEffect(() => {
    fetchItems().then((response) => {
      localStorage.setItem("cartItems", JSON.stringify(response));
      setCartItems(response);
      setCartDetails(response);
    });
    fetchCartCost();
    //eslint-disable-next-line
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
          {loading ? (
            <Backdrop open={loading}>
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            cartItems?.map((item, index) => {
              return (
                <CartItem
                  id={item.BookId}
                  key={index}
                  handleItemQuantity={handleQuantity}
                  quantity={item.quantity}
                  handleDelete={handleDelete}
                />
              );
            })
          )}
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
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
