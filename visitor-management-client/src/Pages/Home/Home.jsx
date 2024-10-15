import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-black via-blue-950 to-purple-950 text-white min-h-[100vh]">
      <Banner></Banner>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Home;
