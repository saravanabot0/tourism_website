import React from 'react';
import "./trip.css";

function TripData(props) {
  return (
    <div className='tCard'>
        <div className='tImage'>
            <img src={props.image} alt="cardImage"/>
        </div>
        <h4> {props.heading} </h4>
        <p> {props.text} </p>
    </div>
  )
}

export default TripData;