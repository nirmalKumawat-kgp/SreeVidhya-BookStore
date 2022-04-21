import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../../baseUrl";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { UserState } from "../../../UserContext";
export default function Header() {
  const { authed, setAuthed } = UserState();
  const navigate = useNavigate();
  const [options, setOptions] = useState(false);

  // const [error, setError] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await API.post("auth/login", {
  //       email: username,
  //       password: password,
  //     });
  //     console.log(data);
  //     localStorage.setItem("authToken", data.token);
  //   } catch (error) {
  //     setError(error.response.data.error);
  //   }
  // };
  // const handleUserClick = () => {
  //   setLoginClick("login-form-container active");
  // };

  window.onscroll = () => {
    if (window.scrollY > 80) {
      console.log("Hi");
      // document.querySelector(".header .header-2").classNameList.add("active");
    } else {
      // document
      //   .querySelector(".header .header-2")
      //   .classNameList.remove("active");
    }
  };
  const handleUserClick = () => {
    if (!authed) {
      navigate("/auth/signin");
    }
    if (authed) {
      setOptions(!options);
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    setAuthed(false);
    setOptions(false);
    navigate(0);
  };
  return (
    <div>
      {/* Header Section Starts */}
      <header className="header">
        <div className="header-1" style={{ position: "relative" }}>
          <a href="/" className="logo">
            {" "}
            <i className="fas fa-book"></i> bookly{" "}
          </a>

          <form action="" className="search-form">
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>

          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="/wishlists" className="fas fa-heart">
              {""}
            </a>
            <a href="/cart" className="fas fa-shopping-cart">
              {""}
            </a>
            <div
              id="login-btn"
              className="fas fa-user"
              onClick={handleUserClick}
            ></div>
          </div>
          {options && (
            <div className="profileDropdown">
              <ul style={{ listStyle: "none" }}>
                <li className="profileOption">My Orders</li>
                <li className="profileOption" onClick={handleLogout}>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="header-2">
          <nav className="navbar">
            <a href="/">home</a>
            <a href="/#featured">featured</a>
            <a href="/#arrivals">arrivals</a>
            <a href="/#reviews">reviews</a>
            <a href="/#blogs">blogs</a>
          </nav>
        </div>
      </header>
      {/* Header Section Ends */}

      {/*Bottom Navbar  */}
      <nav className="bottom-navbar">
        <a href="#home" className="fas fa-home">
          {}
        </a>
        <a href="#featured" className="fas fa-list">
          {}
        </a>
        <a href="#arrivals" className="fas fa-tags">
          {}
        </a>
        <a href="#reviews" className="fas fa-comments">
          {}
        </a>
        <a href="#blogs" className="fas fa-blog">
          {}
        </a>
      </nav>
      {/* Login Form */}
      {/* <div className={loginClick}>
        <div
          id="close-login-btn"
          className="fas fa-times"
          onClick={handleCloseClick}
        ></div>

        <form onSubmit={handleSubmit}>
          <h3>Sign in</h3>
          {error && (
            <span style={{ color: "red", textAlign: "center" }}>{error}</span>
          )}
          <span>Username</span>
          <input
            type="email"
            name=""
            className="box"
            placeholder="Enter your email"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span>Password</span>
          <input
            type="password"
            name=""
            className="box"
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="checkbox">
            <input type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me"> remember me</label>
          </div>
          <input type="submit" value="sign in" className="btn" />
          <p>
            forget password ? <a href="/forgotpassword">click here</a>
          </p>
          <p>
            Don't have an account ? <a href="/auth/signup">Create one</a>
          </p>
        </form>
      </div> */}
    </div>
  );
}
