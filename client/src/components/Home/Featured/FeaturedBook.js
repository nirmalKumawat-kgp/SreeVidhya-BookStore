import React from "react";
import "./Featured.css";
export default function FeaturedBook({
  id,
  name,
  discountPrice,
  originalPrice,
  imageSrc,
}) {
  const handleAddToCart = (id) => {
    console.log(id);
  };
  return (
    <div class="swiper-slide box">
      <div class="icons">
        <a href="#" class="fas fa-search"></a>
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-eye"></a>
      </div>
      <div class="image">
        <img src={imageSrc} alt="" />
      </div>
      <div class="content">
        <h3>{name}</h3>
        <div class="price">
          {discountPrice}
          <span>{originalPrice}</span>
        </div>
        <button class="btn" onClick={() => handleAddToCart(id)}>
          add to cart
        </button>
      </div>
    </div>
  );
}
