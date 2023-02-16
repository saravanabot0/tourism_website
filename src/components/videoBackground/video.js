import React from 'react';
import "./video.css";
import BeachOne from "../../assets/BeachOne.mp4"

function Video(props) {
  return (
    <>
    <div className={props.cName}>
        {props.bgContent === "video" ? <video src={props.bgVideo} muted autoPlay loop type="video/mp4"/>  : <img src={props.bgImg} alt="backgroundImg"/>}
    {/* <video src={BeachOne} muted autoPlay loop type="video/mp4"/> */}
    {/* <img src={props.bgImg} alt="backgroundImg"/> */}
    <div className='heroText'>
        <h1> {props.title} </h1>
        <p> {props.text} </p>
        <a href='/' className={props.btnClass}> Travel Plan </a>
    </div>
    </div>
    </>
  )
}

export default Video