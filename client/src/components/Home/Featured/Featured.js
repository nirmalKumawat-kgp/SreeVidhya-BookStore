import React, { useEffect, useState } from "react";
import API from "../../../baseUrl";

import "./Featured.css";
import Swiper from "swiper";
import FeaturedBook from "./FeaturedBook";
export default function Featured() {
  let imgSrc;
  if (process.env.NODE_ENV === "production") {
    imgSrc = "https://sreevidhyaa.herokuapp.com/";
  } else {
    imgSrc = "http://localhost:3006/";
  }
  const [books, setBooks] = useState(null);
  const [clicks, setClicks] = useState(0);

  const handleChange = () => {
    setClicks((prevclicks) => prevclicks + 1);
  };

  useEffect(() => {
    API.get("books/getAllBooks").then((response) => {
      setBooks(response.data);
    });
    var swiper = new Swiper(".featured-slider", {
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }, [clicks]);
  return (
    <div>
      <section class="featured" id="featured">
        <h1 class="heading">
          <span>Featured books</span>
        </h1>

        <div class="swiper featured-slider">
          <div class="swiper-wrapper">
            {books &&
              books
                .filter((item) => item.BookCategoryId === 2)
                .map((book) => {
                  return (
                    <FeaturedBook
                      id={book.id}
                      discountPrice={book.discountPrice}
                      originalPrice={book.originalPrice}
                      name={book.name}
                      imageSrc={imgSrc + book.bookImage}
                    />
                  );
                })}
          </div>

          <div class="swiper-button-next" onClick={() => handleChange}></div>
          <div class="swiper-button-prev" onClick={() => handleChange}></div>
        </div>
      </section>
    </div>
  );
}
