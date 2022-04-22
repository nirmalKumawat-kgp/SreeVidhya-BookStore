import React, { useEffect, useState } from "react";
import API from "../../../baseUrl";
import "./Arrivals.css";
import Swiper from "swiper";
export default function Arrivals() {
  let imgSrc;
  if (process.env.NODE_ENV === "production") {
    imgSrc = "https://sreevidhyaa.herokuapp.com/";
  } else {
    imgSrc = "http://localhost:3006/";
  }

  const [books, setBooks] = useState(null);
  useEffect(() => {
    API.get("books/getAllBooks").then((response) => {
      setBooks(response.data);
    });
    var swiper = new Swiper(".arrivals-slider", {
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <div>
      <section class="arrivals" id="arrivals">
        <h1 class="heading">
          <span>new arrivals</span>
        </h1>

        <div class="swiper arrivals-slider">
          <div class="swiper-wrapper">
            {books &&
              books
                .filter((item) => item.category === "new arrivals")
                .map((book, index) => {
                  return (
                    <a
                      href={`/book/${book.id}`}
                      class="swiper-slide box"
                      key={index}
                      style={{ display: "flex" }}
                    >
                      <div class="image" style={{ width: "50%" }}>
                        <img
                          src={imgSrc + book.bookImage}
                          alt=""
                          style={{ width: "90%", padding: "0rem 0.5rem" }}
                        />
                      </div>
                      <div class="content">
                        <h3>{book.name}</h3>
                        <div class="price">
                          {book.discountPrice} <span>{book.originalPrice}</span>
                        </div>
                        <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                    </a>
                  );
                })}
          </div>
        </div>
      </section>
    </div>
  );
}
