import React, { useEffect } from "react";
import "./Banner.css";
import { Autoplay } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SwiperSlide, Swiper } from "swiper/react";

export default function Banner() {
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
          <Swiper
            spaceBetween={150}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
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
            }}
          >
            <SwiperSlide>
              <a href="/">
                <LazyLoadImage
                  src="/image/DSC_0450.jpeg"
                  alt="banner_image"
                  effect="blur"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" class="swiper-slide">
                <LazyLoadImage
                  src="/image/DSC_0451.jpeg"
                  alt="banner_image"
                  effect="blur"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" class="swiper-slide">
                <LazyLoadImage
                  src="/image/DSC_0456.jpeg"
                  alt="banner_image"
                  effect="blur"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <LazyLoadImage
                  src="/image/DSC_0442.jpeg"
                  alt="banner_image"
                  effect="blur"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" class="swiper-slide">
                <LazyLoadImage
                  src="/image/DSC_0447.jpeg"
                  alt="banner_image"
                  effect="blur"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" class="swiper-slide">
                <LazyLoadImage
                  src="/image/DSC_0449.jpeg"
                  alt="banner_image"
                  effect="blur"
                />
              </a>
            </SwiperSlide>
          </Swiper>
          <img src="image/stand.png" class="stand" alt="" />
        </div>
      </div>
    </section>
  );
}
