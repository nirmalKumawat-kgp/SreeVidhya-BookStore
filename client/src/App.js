import { Outlet } from "react-router-dom";

import "./App.css";
import "swiper/css/bundle";
import Header from "./components/Home/Header/Header";
function App() {
  // window.onload = () => {
  //   fadeOut();
  // };
  // const loader = () => {
  //   document.querySelector(".loader-container").classList.add("active");
  // };
  // function fadeOut() {
  //   setTimeout(loader, 2000);
  // }

  return (
    <div className="App">
      {/* <div class="loader-container">
        <img src="image/loader-img.gif" alt="" />
      </div> */}
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
