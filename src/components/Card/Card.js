import React from 'react';
import "../../styles/card.css"
import personImage from "../Images/Person.png"
import star from "../Images/Star.png"

function Card(props) {
    console.log(props)
    
  return (
    <div className='card'>
        <img src={props.imageP} alt="" className='cardImage'/>
        <div className='classStats'>
            <img src={star} alt=""  className='cardStar'/>
            <span>{props.rating}</span>
            <span className='gray'>{props.reviewCount} .</span>
            <span className='gray'>USA</span>
        </div>
            <p>{props.title}</p>
            <p> <span className='bold'> From $136 </span> / person</p>
    </div>
    )
}

export default Card;
