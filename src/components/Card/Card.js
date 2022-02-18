import React from 'react';
import "../../styles/card.css"
import personImage from "../Images/Person.png"
import star from "../Images/Star.png"

function Card(props) {
    console.log(props)
    let badgeText 

    if(props.openSpots ===0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }

  return (
        <div className='card'>
            {/* { props.openSpot === 0 && <div className='cardBadge'>SOLD OUT</div>} */}
           {badgeText && <div className='cardBadge'>{badgeText}</div>}
            <img src={`/images/${props.coverImg}`} alt="" className='cardImage'/>
            <div className='classStats'>
                <img src={star} alt=""  className='cardStar'/>
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.rating}) .</span>
                <span className='gray'>USA</span>
            </div>
                <p  className='cardTitle'>{props.title}</p>
                <p> <span className='bold'> From ${props.price} </span> / person</p>
        </div>

    )
}

export default Card;
