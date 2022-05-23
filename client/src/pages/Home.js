import React from "react";
import Banner from "../components/Home/Banner/Banner";
import Blogs from "../components/Home/Blogs/Blogs";
import Category from "../components/Home/Categories/Category";
import Deals from "../components/Home/Deals/Deals";
import Footer from "../components/Home/Footer/Footer";
import Icons from "../components/Home/Icons/Icons";
import NewsLetter from "../components/Home/NewsLetter/NewsLetter";
import Reviews from "../components/Home/Reviews/Reviews";
import WrapperComponent from "../components/WrapperComponent";
export default function Home() {
  document.title = "Home | SreeVidhya BookStore";
  return (
    <WrapperComponent>
      <Banner />

      <Icons />

      <Category />

      <NewsLetter />

      <Deals />

      <Reviews />

      <Blogs />

      <Footer />
    </WrapperComponent>
  );
}
