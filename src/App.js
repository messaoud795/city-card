import React from "react";
import "./App.css";

function App() {
  const services = [
    "studio",
    "2 rooms appartment",
    "3 rooms appartment",
    "4+ rooms appartment",
    "private room",
    "shared room",
  ];

  return (
    <div className="app">
      <figure className="app__cityCard">
        <img
          src="https://d881krhzwma5n.cloudfront.net/assets/hp/our-cities-desktop-milan-286.jpg"
          alt="city img"
          className="app__img"
        />
        <figcaption className="app__caption">
          <p>What do you need?</p>
          <div className="app__services">
            {services.map((service, i) => (
              <span key={i} className="app__service">
                {service}
              </span>
            ))}
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default App;
