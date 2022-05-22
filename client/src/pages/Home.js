import React from "react";
import Banner from "../components/Home/Banner/Banner";
import Blogs from "../components/Home/Blogs/Blogs";
import Deals from "../components/Home/Deals/Deals";
import Icons from "../components/Home/Icons/Icons";
import NewsLetter from "../components/Home/NewsLetter/NewsLetter";
import Reviews from "../components/Home/Reviews/Reviews";
import Footer from "../components/Home/Footer/Footer";
import Category from "../components/Home/Categories/Category";

export default function Home() {
  return (
    <div>
      {/* Pre Loader */}

      <Banner />

      <Icons />

      <Category />

      <NewsLetter />

      <Deals />

      <Reviews />

      <Blogs />

      <Footer />
    </div>
  );
}
