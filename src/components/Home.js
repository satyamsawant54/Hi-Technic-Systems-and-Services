import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero-section bg-slate-100" id="home">
      <div className="container mx-auto text-center p-12">
        <h1 className="text-4xl navbar-h1 md:text-3xl lg:text-4xl pt-10 font-bold  leading-tight mb-4 font-sans">
          We Deliver Fast, Reliable & Affordable IT Services
        </h1>
        <p className="text-2xl md:text-2xl text-blue-700 p-2 navbar-p">
          Systematic IT Services
        </p>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
          Get Started
        </button> */}
      </div>
    </div>
  );
};

export default Home;
