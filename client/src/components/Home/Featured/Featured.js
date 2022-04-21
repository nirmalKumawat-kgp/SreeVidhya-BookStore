import React, { useEffect, useState } from "react";
import "./Featured.css";
import Swiper from "swiper";
import FeaturedBook from "./FeaturedBook";
export default function Featured() {
  const [clicks, setClicks] = useState(0);

  const handleChange = () => {
    setClicks((prevclicks) => prevclicks + 1);
  };

  useEffect(() => {
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

  const books = [
    {
      id: 1,
      name: "Featured Book 1",
      discountPrice: "$15.99 ",
      originalPrice: "$20.99",
      imageSrc: "image/book-2.png",
    },
    {
      id: 2,
      name: "Featured Book 2",
      discountPrice: "$15.99 ",
      originalPrice: "$20.99",
      imageSrc: "image/book-3.png",
    },
    {
      id: 3,
      name: "Featured Book 3",
      discountPrice: "$15.99 ",
      originalPrice: "$20.99",
      imageSrc: "image/book-4.png",
    },
  ];

  return (
    <div>
      <section class="featured" id="featured">
        <h1 class="heading">
          <span>Featured books</span>
        </h1>

        <div class="swiper featured-slider">
          <div class="swiper-wrapper">
            {books.map((book) => {
              return (
                <FeaturedBook
                  id={book.id}
                  discountPrice={book.discountPrice}
                  originalPrice={book.originalPrice}
                  name={book.name}
                  imageSrc={book.imageSrc}
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
