import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import personImage from "../src/components/Images/Person.png"


function App () {
    return (
      <div>
        <Navbar />
        <Hero />
        <Card 
        imageP={personImage}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title= "Life lessons with Katie Zaferes"
        price= {136}
        />
         <Card 
        imageP={personImage}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title= "Life lessons with Katie Zaferes"
        price= {136}
        />
         <Card 
        imageP={personImage}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title= "Life lessons with Katie Zaferes"
        price= {136}
        />
      </div>
    )
}

export default App;
