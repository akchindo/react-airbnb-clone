import React from 'react';
import "../../styles/card.css"
import personImage from "../Images/Person.png"
import star from "../Images/Star.png"

function Card() {
  return (
    <div className='card'>
        <img src={personImage} alt="" className='cardImage'/>
        <div className='classStats'>
            <img src={star} alt=""  className='cardStar'/>
            <span>5.0</span>
            <span className='gray'>(6) .</span>
            <span className='gray'>USA</span>
        </div>
            <p>Life lessons with Katie Zaferes</p>
            <p> <span className='bold'> From $136 </span> / person</p>
    </div>
    )
}

export default Card;
