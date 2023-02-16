import {React, useEffect} from 'react';
import contactBg from '../../assets/contact01.jpg';
import Video from '../../components/videoBackground/video';
import NavBar from '../../components/navBar/navBar';
import "./contact.css";
import Footer from '../../components/footer/footer';
import ContactForm from '../../components/contactUs/contactForm';

function Contact() {

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
    bgImg={contactBg}
    title="Contact"
    btnClass="hide"
    />
    <ContactForm/>
    <Footer/>
</section>
  )
}

export default Contact