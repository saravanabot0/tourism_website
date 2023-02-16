import React from 'react';
import "./trip.css";
import TripData from './tripData';
import destiny1 from "../../assets/destiny1.jpg";
import tajMahal from "../../assets/tajMahal.jpg";
import malaysia from "../../assets/malaysia.jpg";
import france from "../../assets/france.jpg";

function Trip() {
  return (
    <div className='trip'>
        <h1> Recent Trips </h1>
        <p> You can discover unique destination using Google Maps. </p>
        <div className='tripCard'>
            <TripData
            image={tajMahal}
            heading="Trip in India"
            text="India is a country that attracts millions of tourists every year and is considered one of the most popular tourist destinations in the world. These visitors are attracted to its natural beauty and cultural heritage. It has many historic sites as well like the Taj Mahal, Golden Temple, Red Fort, etc. With so much to offer, it’s no surprise that tourism is one of the main sources of revenue for the country! "
            />
            <TripData
            image={malaysia}
            heading="Trip in Malaysia"
            text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers."
            />
            <TripData
            image={france}
            heading="Trip in France"
            text="France remains one of the world’s most popular tourist destinations. Holidays to France offer a fantastic variety of experiences, from the urbane, big-city buzz of Paris to the leisurely delights of a cruise along beautiful rivers like the Loire, the Scene or the Rhône.Our river cruises here can take you to the French capital world-famous museums, art galleries and monuments, to Bordeaux, where you can sample the superb local wines, or to scenic southern region of Provence."
            />
        </div>
    </div>
  )
}

export default Trip