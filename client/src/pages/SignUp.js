import React, { useState } from "react";
import API from "../baseUrl";
import { UserState } from "../UserContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { setAuthed, authed } = UserState();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // handle form Submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !name || !password) {
      setError("Please Fill all the required Fields");
      setTimeout(() => setError(""), 5000);
      return setError("Please Fill all the required Fields");
    }
    try {
      const { data } = await API.post("auth/register", {
        name: name,
        email: username,
        password: password,
      });
      if (data.success) {
        localStorage.setItem("authToken", data.token);
        setAuthed(true);
        navigate("/");
      }
    } catch (error) {
      setTimeout(() => setError(""), 5000);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="login-form-container active">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign Up</h3>
        {error && (
          <span style={{ color: "red", textAlign: "center" }}>{error}</span>
        )}
        <span>Name</span>
        <input
          type="text"
          name="name"
          className="box"
          placeholder="Enter your Full Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <span>Username</span>
        <input
          type="email"
          name="email"
          className="box"
          placeholder="Enter your email"
          id="email"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span>Password</span>
        <input
          type="password"
          name="password"
          className="box"
          placeholder="Enter your password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="sign up" className="btn" />
        <p>
          forget password ? <a href="/forgotpassword">click here</a>
        </p>
        <p>
          Already have an Account ? <a href="/auth/signin">Sign In</a>
        </p>
      </form>
    </div>
  );
}
