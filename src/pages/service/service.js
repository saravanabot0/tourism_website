import {React, useEffect} from 'react';
import world from '../../assets/world.jpg';
import Video from '../../components/videoBackground/video';
import NavBar from '../../components/navBar/navBar';
import "./service.css";
import Footer from '../../components/footer/footer';
import Trip from '../../components/trip/trip';

function Service() {
  
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
    bgImg={world}
    title="Service"
    btnClass="hide"
    />
    <Trip/>
    <Footer/>
</section>
  )
}

export default Service