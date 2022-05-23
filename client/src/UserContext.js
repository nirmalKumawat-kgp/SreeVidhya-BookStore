import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./baseUrl";
const User = React.createContext();

export default function UserContext({ children }) {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(false);
  // const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    const fetchUser = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await API.get("/user", config);
        const data = await response.data;
        if (await data.success) {
          setAuthed(true);
        }
      } catch (error) {
        setAuthed(false);
      }
    };

    if (token) {
      fetchUser();
      console.log(authed);
    }
    //eslint-disable-next-line
  }, []);
  return (
    <User.Provider value={{ authed, setAuthed }}>{children}</User.Provider>
  );
}

export const UserState = () => {
  return useContext(User);
};
