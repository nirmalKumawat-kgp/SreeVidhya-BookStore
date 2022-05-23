import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryBook from "./CategoryBook";
import "./CategoryBook.css";

export default function CategoryItem({ category, books }) {
  return (
    <div>
      {books.length ? (
        <section className="featured" id="featured">
          <h1 className="heading">
            <span>
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </span>
          </h1>

          <div className="swiper featured-slider">
            <Swiper
              spaceBetween={10}
              loop={false}
              centeredSlides={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loopFillGroupWithBlank={true}
              navigation={true}
              modules={[Navigation, Autoplay]}
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
              {books.map((book, index) => {
                return (
                  <SwiperSlide>
                    <CategoryBook
                      key={index}
                      id={book.id}
                      discountPrice={book.discountPrice}
                      originalPrice={book.originalPrice}
                      name={book.name}
                      imageSrc={book.bookImage}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}
