import React from "react";
import Arrivals from "../components/Home/Arrivals/Arrivals";
import Banner from "../components/Home/Banner/Banner";
import Blogs from "../components/Home/Blogs/Blogs";
import Deals from "../components/Home/Deals/Deals";
import Featured from "../components/Home/Featured/Featured";
import Icons from "../components/Home/Icons/Icons";
import NewsLetter from "../components/Home/NewsLetter/NewsLetter";
import Reviews from "../components/Home/Reviews/Reviews";
import Footer from "../components/Home/Footer/Footer";

export default function Home() {
  return (
    <div>
      {/* Pre Loader */}

      <Banner />

      <Icons />

      <Featured />

      <NewsLetter />

      <Arrivals />

      <Deals />

      <Reviews />

      <Blogs />

      <Footer />
    </div>
  );
}
