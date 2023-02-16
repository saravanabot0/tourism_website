import {React, useEffect} from 'react';
import Video from '../../components/videoBackground/video';
import island from '../../assets/island.jpg';
import BeachOne from "../../assets/BeachOne.mp4"
import "./home.css";
import NavBar from '../../components/navBar/navBar';
import Destination from '../../components/destination/destination';
import Trip from '../../components/trip/trip';
import Footer from '../../components/footer/footer';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <section className='home'>
        <NavBar/>
        <Video
        cName="hero"
        bgContent= "video"
        bgVideo={BeachOne}
        // bgImg={island}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
    </section>
  )
}

export default Home