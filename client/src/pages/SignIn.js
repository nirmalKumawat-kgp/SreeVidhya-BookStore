import React, { useState, useEffect } from "react";
import API from "../baseUrl";
import { useNavigate } from "react-router-dom";
import { UserState } from "../UserContext";
import { useLocation } from "react-router-dom";

export default function SignIn() {
  const { setAuthed, authed } = UserState();
  const { state } = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  console.log(state);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("auth/login", {
        email: username,
        password: password,
      });
      //if user details found then navigate to desired path
      if (data.success) {
        localStorage.setItem("authToken", data.token);
        setAuthed(true);
        navigate(state?.path || "/");
      }
    } catch (error) {
      setTimeout(() => setError(null), 3000);
      setError(error.response.data.error);
    }
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (authed) {
      navigate(state?.path || "/");
    }
  });
  return (
    <div>
      <div className="login-form-container active">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          {error && (
            <span style={{ color: "red", textAlign: "center" }}>{error}</span>
          )}
          <span>Username</span>
          <input
            id="email"
            type="email"
            name="email"
            className="box"
            placeholder="Enter your email"
            value={username}
            onChange={handleUsernameChange}
          />
          <span>Password</span>
          <input
            id="password"
            type="password"
            name="password"
            className="box"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" value="sign in" className="btn">
            Sign In
          </button>
          <p>
            forget password ? <a href="/forgotpassword">click here</a>
          </p>
          <p>
            Don't have an account ? <a href="/auth/signup">Create one</a>
          </p>
        </form>
      </div>
    </div>
  );
}
