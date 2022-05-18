import { Box, Typography, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../baseUrl";
import { UserState } from "../UserContext";
import { handleAddToCart } from "../utils/helpers";
import Styles from "./Book.module.css";
export default function Book() {
  let imgSrc;
  const { authed } = UserState();
  if (process.env.NODE_ENV === "production") {
    imgSrc = "https://sreevidhyaa.herokuapp.com";
  } else {
    imgSrc = "http://localhost:3006";
  }

  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  useEffect(() => {
    API.get("books/" + id).then((response) => setBook(response.data.data));
  }, []);

  return (
    <div className={Styles.bookContainer}>
      {book && (
        <>
          <div className={Styles.imageContainer}>
            <img src={imgSrc + book.bookImage} alt={`${book.name}`} />
          </div>
          <div className={Styles.content}>
            <Typography variant="h2">{book.name}</Typography>
            <blockquote style={{ color: "rgba(0,0,0,0.7)" }}>
              {" "}
              <Typography variant="h5" className={Styles.author}>
                By - &nbsp;{book.author}
              </Typography>
            </blockquote>
            <Box style={{ marginTop: "1.5rem" }}>
              <Typography
                variant="h5"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                M.R.P: &nbsp;
                <span style={{ textDecoration: "line-through" }}>
                  ₹{book.originalPrice}
                </span>
              </Typography>
              <Typography
                variant="h5"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                Deal of the Day: &nbsp;
                <span
                  style={{ color: "rgba(255,0,0,0.8)", fontSize: "1.75rem" }}
                >
                  ₹{book.discountPrice}
                </span>
              </Typography>
            </Box>
            <Box
              style={{
                marginTop: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <button
                type="submit"
                value="sign in"
                className={`btn ${Styles.button}`}
                onClick={() => {
                  if (authed) {
                    handleAddToCart(book.id).then((response) => {
                      console.log(response);
                      if (response.success) {
                        setError("Added To Cart");
                        setTimeout(() => {
                          setError("");
                          navigate("/cart");
                        }, 1000);
                      }
                      if (response.error) {
                        setError(response.error);
                        setTimeout(() => {
                          setError("");
                          navigate("/cart");
                        }, 2000);
                      }
                    });
                  } else {
                    navigate("/auth/signin", {
                      state: { path: `/book/${book.id}` },
                    });
                  }
                }}
              >
                Add to Cart
              </button>
              {error && (
                <Alert
                  severity="success"
                  style={{ margin: "1rem", fontSize: "1.25rem" }}
                >
                  {error}
                </Alert>
              )}
            </Box>
          </div>
        </>
      )}
    </div>
  );
}
