import React from 'react';
import {VeryShortText} from '../../../assets/Others/Placeholder_text';
import ReactPlayer from "react-player"
import Map from './Map';
import Modal from '../../UI/Modal/Modal';
import FoodImg from '../../../assets/images/Tosca burgher.jpg'
import './Home.css';

const location = {
    address: 'Tosca 1991 - Bistro Cafe',
    lat: 46.9246,
    lng: 26.378176,
  }

const Home = props => {
    return(
        <div className="Home__page">
            <div className="Cafe__section">
                <p>{VeryShortText}</p> 
                <img className="introImg" src="https://i.pinimg.com/originals/c9/0e/57/c90e57c16916df4326530cbca3996e6d.jpg" alt="cafe img" />
            </div>

            <h1>Food</h1>
            <div className="Food__section">
                <img src={FoodImg} alt="food img" />
                <p>{VeryShortText}</p> 
            </div>

            <h1>Wine</h1>
            <div className="Wine__section">
                <p>{VeryShortText}</p>
                <img src="https://pngimg.com/uploads/wine/wine_PNG9479.png" alt="food img" />
            </div>

            <h1> About us </h1>
            <div className="About_Us">
                <p>{VeryShortText}</p>
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=eaZ7hVSYd9o&feature=youtu.be&ab_channel=AdrianSarbu'
                    width='100%'
                    height='100%'
                    />
                </div>
            </div>

            <h1> Mini menu </h1>
            <div className="Mini_menu">
                <p>{VeryShortText}</p>
            </div>

            <div className="Contact_Us" id="contact">
                <div className="contactUsWrapper">
                    <img className="contactImg" src="https://u.osu.edu/bounemany3hseportfolio/files/2016/11/Capture3-1nbxxzs.png" alt="contact img"/>
                    <div className="contactImgText">
                        <p>Cum sa ne gasiti </p>
                        <p>Adresa:
                            Telefon:
                            E-mail:
                        </p>
                    </div>
                </div>
                <Map location={location} zoomLevel={17}/>
            </div>

            <h1> Social media stuff </h1>
            <div className="Social Stuff">
                <p>{VeryShortText}</p>
            </div>
        </div>
    )
}

export default Home;