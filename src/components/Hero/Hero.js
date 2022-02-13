import React from "react";
import "../../styles/hero.css";
import heroImage from "../Images/Group77.png";

function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt='' className="heroPhoto" />
      <h1 className="heroHeader">Online Experiences</h1>
      <p className="heroText"> Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
