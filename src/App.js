import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import ServicesTitle from "./components/ServicesTitle";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove this in your actual application)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App h-screen">
      {isLoading ? (
        <Loader loadingText="Loading" />
      ) : (
        <div>
          <Navbar />
          <a href="#home">
            <Home />
          </a>
          <a href="#about">
            <About />
          </a>
          <ServicesTitle />
          <a href="#services">
            <Services />
          </a>
          <a href="#contact">
            <Footer />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
