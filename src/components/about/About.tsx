import React from "react";

function About() {
  return (
    <div className="mt-10 mb-10 ml-10 mr -10 font-mono">
      <p className="text-3xl font-bold subpixel-antialiased">
        This is my pet project to learn frontend development.
      </p>
      <div className="text-xl font-medium">
        <p>
          At the moment, the project implements registration, authentication,
          authorization.
        </p>
        <p className="mt-5">
          The application is designed to host authors and their books.
        </p>
        <p>As an api, my api written in nest.js is used.</p>
      </div>
    </div>
  );
}

export default About;
