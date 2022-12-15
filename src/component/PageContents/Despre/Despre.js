import React from 'react';
import './Despre.css'
import ReactPlayer from "react-player"
import {VeryShortText} from '../../../assets/Others/Placeholder_text';

const Despre = props => {
    return(
        <div className="Despre__page">
            <h1> Despre PAGE</h1>

            <p>{VeryShortText}</p>

            <div className="Youtube__video">
                <ReactPlayer url="https://youtu.be/eaZ7hVSYd9o"/>
            </div>
            
        </div>
    )
}

export default Despre;