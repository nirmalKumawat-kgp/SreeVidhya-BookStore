import React, { useEffect, useState } from "react";
import API from "../../../baseUrl";

import "./Featured.css";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
// import Swiper from "swiper";
import FeaturedBook from "./FeaturedBook";
export default function Featured() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    API.get("books/getAllBooks").then((response) => {
      setBooks(response.data);
    });
  }, []);
  return (
    <div>
      <section class="featured" id="featured">
        <h1 class="heading">
          <span>Featured books</span>
        </h1>

        <div class="swiper featured-slider">
          <Swiper
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
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
            {books &&
              books
                .filter((item) => item.BookCategoryId === 2)
                .map((book) => {
                  return (
                    <SwiperSlide>
                      <FeaturedBook
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
    </div>
  );
}
