import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import personImage from "../src/components/Images/Person.png";
import wedding from "../src/components/Images/wedding-photography 1.png";
import bike from "../src/components/Images/mountain-bike 1.png";
import data from "./data";
import "./styles/styles.css";
// import personImagea from '../public/Images/Person.png'

const cards = data.map((item) => {
  //  return < Card
  //     key={item.id}
  //     imageP={item.coverImg}
  //     rating={item.stats.rating}
  //     reviewCount={item.stats.reviewCount}
  //     country={item.location}
  //     title={item.title}
  //     price={item.price}
  //     openSpot={item.openSpots}
  // />

  return <Card 
          key={item.id} 
          {...item}
          // item={item}
          />;
});

function App() {
  console.log("checking data", data[0].coverImg);
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cardList'>{cards}</section>
    </div>
  );
}

// const num = [1, 2, 3, 4, 5]

// const square = num.map((n)=> {
//  return n**2

// })
// console.log(square)

// const names = ["liman", "tycoon", "doings"]

// const upperCase = names.map((name) => {
//   return name[0].toUpperCase() + name.slice(1)

// })

// console.log(upperCase)

// const html = names.map((name) => {
//   return `<p>${name}</p>`

// })

// console.log(html)

export default App;
