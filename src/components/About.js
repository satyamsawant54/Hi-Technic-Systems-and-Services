import React from "react";

function About() {
  return (
    <section className="py-12 md:py-16" id="about">
      <div className="container mx-auto">
        <h2 className="text-5xl ml-5 md:text-5xl font-extrabold font-serif mb-4 md:mb-8">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-5">
            <p className="text-gray-700 mb-4 font-serif font-extrabold">
              Get the best technology solutions and services under one roof. We
              offer convenient and reliable IT services for various industries
            </p>
            <p className="text-gray-700 mb-4 font-serif mt-8 font-extrabold">
              Systematic IT Services specializes in providing comprehensive IT
              solutions
            </p>
          </div>
          <div className="p-5">
            <img
              src="images/about.webp"
              alt="About Us"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
