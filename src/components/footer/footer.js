import React from 'react';
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import wave from "../../assets/wave.png"

function Footer() {
  return (
    <div className='footer'>
        <div className='waves'>
            <div className='wave' id="wave1"></div>
            <div className='wave' id="wave2"></div>
            <div className='wave' id="wave3"></div>
            <div className='wave' id="wave4"></div>
        </div>
        <div className='top'>
            <div>
                <h1> Tourism </h1>
                <p> Choose your favourite destination </p>
            </div>
            <div>
                <a href='/'> <FaFacebook className='socialMediaIcons'/> </a>
                <a href='/'> <FaInstagram className='socialMediaIcons'/> </a>
                <a href='/'> <FaTwitter className='socialMediaIcons'/> </a>
                <a href='/'> <FaYoutube className='socialMediaIcons'/> </a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4> Project </h4>
                <a href='/'> Changelog </a>
                <a href='/'> Status </a>
                <a href='/'> License </a>
                <a href='/'> All Versions </a>
            </div>
            <div>
                <h4> Community </h4>
                <a href='/'> GitHub </a>
                <a href='/'> Issues </a>
                <a href='/'> Project </a>
                <a href='/'> Twitter </a>
            </div>
            <div>
                <h4> Help </h4>
                <a href='/'> Support </a>
                <a href='/'> Troubleshooting </a>
                <a href='/'> Contact Us </a>
            </div>
            <div>
                <h4> Others </h4>
                <a href='/'> Terms of Service </a>
                <a href='/'> Privacy Policy </a>
                <a href='/'> License </a>
            </div>
        </div>
    </div>
  )
}

export default Footer;