import React from 'react';
import destinyOne from "../../assets/destiny1.jpg";
import destinyTwo from "../../assets/destiny2.jpg";
import tajMahal00 from "../../assets/tajMahal01.jpg";
import thanjaiKoil from "../../assets/thanjaiKoil.jpg";
import island00 from "../../assets/island00.jpg";
import island01 from "../../assets/island01.jpg";
import "./destination.css";
import DestinationData from './destinationData';

function Destination() {
  return (
    <div className='destination'>
        <h1> Popular Destinations </h1>
        <p> Tours give the opportunity to see a lot, within a time frame. </p>

        {/* <div className='firstDes'>
            <div className='desText'>
                <h2> Taal volcano, Batangas </h2>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            </div>
            <div className='image'>
                <img src={destinyOne} alt="destinationOne"/>
                <img src={destinyTwo} alt="destinationTwo"/>
            </div>
        </div> */}
        <DestinationData 
        className="firstDes"
        heading="Taal volcano, Batangas"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        img1={tajMahal00}
        img2={thanjaiKoil}
        />
        <DestinationData 
        className="firstDesReverse"
        heading="Taal volcano, Batangas"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        img1={island00}
        img2={island01}
        />
    </div>
  )
}

export default Destination;