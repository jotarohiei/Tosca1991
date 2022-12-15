import React from 'react';
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer_left">
                <h1> Footer left </h1>
                <FacebookIcon/>
                <InstagramIcon/>
            </div>
            <div className="footer_right">
                <h1> Footer right </h1>
            </div>
        </div>
    )
}

export default Footer;

