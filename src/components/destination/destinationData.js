import React from 'react';
import destinyOne from "../../assets/destiny1.jpg";
import destinyTwo from "../../assets/destiny2.jpg";
import "./destination.css";


function DestinationData(props) {
  return (
    <div className={props.className}>
            <div className='desText'>
                <h2> {props.heading} </h2>
                <p> {props.text} </p>
            </div>
            <div className='image'>
                <img src={props.img1} alt="destinationOne"/>
                <img src={props.img2} alt="destinationTwo"/>
            </div>
        </div>
  )
}

export default DestinationData