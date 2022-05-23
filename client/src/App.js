import { Outlet } from "react-router-dom";
import "swiper/css/bundle";
import "./App.css";
import Header from "./components/Home/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
