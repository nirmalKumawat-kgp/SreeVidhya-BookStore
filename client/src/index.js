import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import CartContext from "./CartContext";
import Auth from "./pages/Auth";
import Book from "./pages/Book";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import UserContext from "./UserContext";

ReactDOM.render(
  <Router>
    <UserContext>
      <CartContext>
        <Routes>
          <Route exact path="/" element={<App />}>
            <Route index element={<Home />} />

            <Route
              exact
              path="cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route exact path="book/:id" element={<Book />} />
          </Route>

          <Route exact path="/auth" element={<Auth />}>
            <Route exact path="signup" element={<SignUp />} />
            <Route exact path="signin" element={<SignIn />} />
          </Route>
        </Routes>
      </CartContext>
    </UserContext>
  </Router>,
  document.getElementById("root")
);
