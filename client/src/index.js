import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ReactDOM from "react-dom";
import App from "./App";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import ProtectedRoute from "./ProtectedRoute";
import UserContext from "./UserContext";
import Book from "./pages/Book";
import CartContext from "./CartContext";
import Checkout from "./pages/Checkout";

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

            <Route exact path="book/:id" element={<Book />} />
          </Route>
          <Route
            exact
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
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
