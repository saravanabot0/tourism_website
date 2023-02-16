import {React, useEffect} from 'react';
import "./about.css";
import island from '../../assets/island.jpg';
import Video from '../../components/videoBackground/video';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import AboutUs from '../../components/aboutUs/aboutUs';


function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <section className='home'>
        <NavBar/>
        <Video
        cName="heroMid"
        bgContent= "image"
        // bgVideo={BeachOne}
        bgImg={island}
        title="About Our Tourism"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
    </section>
  )
}

export default About