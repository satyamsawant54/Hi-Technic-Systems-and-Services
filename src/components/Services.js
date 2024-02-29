import React from "react";
import data from "../data";
import "./Services.css";

const Services = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 m-5"
      id="services"
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="services-section bg-img  text-center"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <h1 className="text-white font-bold text-xl">{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Services;
