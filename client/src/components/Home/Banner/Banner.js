import React, { useEffect } from "react";
import "./Banner.css";
import Swiper from "swiper";

export default function Banner() {
  useEffect(() => {
    var swiper = new Swiper(".books-slider", {
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
    <section class="home" id="home">
      <div class="row">
        <div class="content">
          <h3>upto 75% off</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex
            minima at!
          </p>
          <a href="/" class="btn">
            shop now
          </a>
        </div>

        <div class="swiper books-slider">
          <div class="swiper-wrapper">
            <a href="/" class="swiper-slide">
              <img src="/image/book-1.png" alt="" />
            </a>
            <a href="/" class="swiper-slide">
              <img src="/image/book-2.png" alt="" />
            </a>
            <a href="/" class="swiper-slide">
              <img src="/image/book-3.png" alt="" />
            </a>
            <a href="/" class="swiper-slide">
              <img src="/image/book-4.png" alt="" />
            </a>
            <a href="/" class="swiper-slide">
              <img src="/image/book-5.png" alt="" />
            </a>
            <a href="/" class="swiper-slide">
              <img src="/image/book-6.png" alt="" />
            </a>
          </div>
          <img src="image/stand.png" class="stand" alt="" />
        </div>
      </div>
    </section>
  );
}
