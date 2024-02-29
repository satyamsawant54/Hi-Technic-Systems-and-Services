// Loader.js
import React from "react";
import "./Loader.css"; // Import the CSS file for styling

const Loader = ({ loadingText }) => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loading-text ml-8 text-3xl font-extrabold font-sans text-blue-950">
        {loadingText}
      </p>
    </div>
  );
};

export default Loader;
