import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserState } from "../../../UserContext";
import { handleAddToCart } from "../../../utils/helpers";
import { Alert } from "@mui/material";
import "./CategoryBook.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function CategoryBook({
  id,
  name,
  discountPrice,
  originalPrice,
  imageSrc,
}) {
  const { authed } = UserState();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  return (
    <div class="swiper-slide box">
      <div class="icons">
        {/* <a href="#" class="fas fa-search"></a> */}
        <a href="#" class="fas fa-heart"></a>
        {/* <a href="#" class="fas fa-eye"></a> */}
      </div>

      <div
        class="image"
        onClick={() => {
          navigate(`/book/${id}`);
        }}
        style={{ cursor: "pointer" }}
      >
        <LazyLoadImage effect="blur" src={imageSrc} alt={name + "image"} placeholderSrc="/image/book-6.png" />
      </div>
      <div class="content">
        <h3>{name}</h3>
        <div class="price">
          <span>₹{discountPrice}</span>
          <span>₹{originalPrice}</span>
        </div>
        <button
          class="btn"
          onClick={() => {
            if (authed) {
              handleAddToCart(id).then((response) => {
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
                state: { path: `/book/${id}` },
              });
            }
          }}
        >
          add to cart
        </button>
        {error && (
          <Alert
            severity="success"
            style={{ margin: "1rem", fontSize: "1.25rem" }}
          >
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
}
